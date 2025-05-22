export interface Quote {
    id: number;
    body: string;
    author: string;
    tags: string[];
  }
  
  export interface PaginatedResponse {
    quotes: Quote[];
    page: number;
    hasMore: boolean;
    totalPages: number;
    totalQuotes: number;
    requestedCount: number;
  } 