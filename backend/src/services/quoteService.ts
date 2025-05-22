import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the correct path
config({ path: join(__dirname, '..', '..', '.env') });

import axios, { AxiosResponse } from 'axios';
import NodeCache from 'node-cache';
import { QuoteFilterOptions, FavQsResponse, RateLimitInfo, PaginatedResponse } from '../types/quote.js';

class QuoteService {
  private cache: NodeCache;
  private apiKey: string;
  private baseUrl: string;
  private rateLimitInfo: RateLimitInfo;
  private readonly RATE_LIMIT_WINDOW = 5000; // 5 seconds in milliseconds
  private readonly MAX_RETRIES = 3;
  private readonly INITIAL_RETRY_DELAY = 1000; // 1 second
  private readonly PAGE_SIZE = 25;
  private readonly RATE_LIMIT_REMAINING_HEADER = 'rate-limit-remaining';
  private readonly MAX_RATE_LIMIT = 30; // Maximum requests allowed in the rate limit window
  private readonly HTTP_TOO_MANY_REQUESTS = 429; // HTTP status code for rate limiting

  constructor() {
    this.cache = new NodeCache({ 
      stdTTL: this.RATE_LIMIT_WINDOW / 1000, // 5 seconds to match rate limit window
      checkperiod: 5 // Check every 5 seconds
    });
    this.apiKey = process.env.FAVQS_API_KEY || '';
    this.baseUrl = 'https://favqs.com/api/quotes';
    this.rateLimitInfo = {
      remaining: this.MAX_RATE_LIMIT, // Start with max limit
      resetTime: Date.now() + this.RATE_LIMIT_WINDOW
    };

    if (!this.apiKey) {
      throw new Error('FAVQS_API_KEY environment variable is required');
    }
  }

  private updateRateLimitInfo(response: AxiosResponse): void {
    const remaining = parseInt(response.headers[this.RATE_LIMIT_REMAINING_HEADER] || '0');
    if (!isNaN(remaining)) {
      this.rateLimitInfo.remaining = remaining;
      this.rateLimitInfo.resetTime = Date.now() + this.RATE_LIMIT_WINDOW;
    }
  }

  private async waitForRateLimit(): Promise<void> {
    if (this.rateLimitInfo.remaining <= 0) {
      const waitTime = Math.max(0, this.rateLimitInfo.resetTime - Date.now());
      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
        this.rateLimitInfo.remaining = this.MAX_RATE_LIMIT; // Reset to max after waiting
      }
    }
  }

  private async makeRequestWithRetry<T>(requestFn: () => Promise<AxiosResponse<T>>): Promise<AxiosResponse<T>> {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt < this.MAX_RETRIES; attempt++) {
      try {
        await this.waitForRateLimit();
        const response = await requestFn();
        this.updateRateLimitInfo(response);
        return response;
      } catch (error) {
        lastError = error as Error;
        if (axios.isAxiosError(error) && error.response?.status === this.HTTP_TOO_MANY_REQUESTS) {
          const retryDelay = this.INITIAL_RETRY_DELAY * Math.pow(2, attempt);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
        throw error;
      }
    }
    
    throw lastError || new Error('Max retries exceeded');
  }

  async getQuotes(page: number = 1, count: number, options: QuoteFilterOptions): Promise<PaginatedResponse> {
    const timestamp = Math.floor(Date.now() / (this.RATE_LIMIT_WINDOW / 1000));
    const cacheKey = `quotes_${timestamp}_${page}_${count}_${options.filter}_${options.type}`;
    const cachedResponse = this.cache.get<PaginatedResponse>(cacheKey);

    if (cachedResponse) {
      return cachedResponse;
    }

    try {
      const response = await this.makeRequestWithRetry(() => 
        axios.get<FavQsResponse>(this.baseUrl, {
          headers: {
            'Authorization': `Token token=${this.apiKey}`
          },
          params: {
            filter: options.filter,
            type: options.type,
            page: page
          }
        })
      );

      if (response.data.error_code) {
        throw new Error(response.data.message || 'API Error');
      }

      if (!response.data.quotes || !Array.isArray(response.data.quotes)) {
        throw new Error('Invalid response format from API');
      }

      const quotes = response.data.quotes;
      const remainingQuotes = count - ((page - 1) * this.PAGE_SIZE);
      const quotesToReturn = Math.min(remainingQuotes, quotes.length);
      const isLastPage = response.data.last_page || quotesToReturn < this.PAGE_SIZE;
      const hasMore = !isLastPage && quotesToReturn === this.PAGE_SIZE;

      const paginatedResponse: PaginatedResponse = {
        quotes: quotes.slice(0, quotesToReturn),
        page,
        hasMore,
        totalPages: Math.ceil(count / this.PAGE_SIZE),
        totalQuotes: Math.min(count, (page - 1) * this.PAGE_SIZE + quotesToReturn),
        requestedCount: count
      };

      // Cache the results with a TTL based on rate limit window
      this.cache.set(cacheKey, paginatedResponse, this.RATE_LIMIT_WINDOW / 1000);
      return paginatedResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch quotes');
      }
      throw error;
    }
  }
}

export const quoteService = new QuoteService(); 