import { PaginatedResponse } from '../types/quotes.d';
import api from './index';

interface FetchQuotesParams {
  count: number;
  page: number;
  tagFilter?: string;
}

export const fetchQuotes = async ({ count, page, tagFilter }: FetchQuotesParams): Promise<PaginatedResponse> => {
  const params: Record<string, any> = {
    count,
    page
  };

  if (tagFilter?.trim()) {
    params.filter = tagFilter.trim();
    params.type = 'tag';
  }

  const response = await api.get<PaginatedResponse>('/quotes/random', { params });
  return response.data;
}; 