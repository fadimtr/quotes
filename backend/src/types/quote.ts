export interface Quote {
  id: number;
  body: string;
  author: string;
  author_permalink: string;
  tags: string[];
  favorite: boolean;
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  dialogue: boolean;
  url: string;
}

export interface FavQsResponse {
  quotes: Quote[];
  page: number;
  last_page: boolean;
  error_code?: number;
  message?: string;
}

export type FilterType = 'author' | 'tag' | 'user';

export interface QuoteFilterOptions {
  filter?: string;
  type?: FilterType;
  page?: number;
}

export interface RateLimitInfo {
  remaining: number;
  resetTime: number;
}

export interface PaginatedResponse {
  quotes: Quote[];
  page: number;
  hasMore: boolean;
  totalPages: number;
  totalQuotes: number;
  requestedCount: number;
} 