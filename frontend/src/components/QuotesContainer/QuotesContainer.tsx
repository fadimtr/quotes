import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Typography,
  Chip,
  Pagination,
} from '@mui/material';
import {
  SearchContainer,
  CountInput,
  TagInput,
  QuoteCard,
  QuoteText,
  AuthorText,
  TagsContainer,
  ResultsContainer,
  PaginationContainer,
  PaginationWrapper,
} from './QuotesContainer.styles';
import EmptyState from '../EmptyState';
import { Quote } from '../../types/quotes';
import { useGetQuotes } from '../../hooks/useGetQuotes';

const QuotesContainer: React.FC = () => {
  const [count, setCount] = useState<number>(5);
  const [tagFilter, setTagFilter] = useState<string>('');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalQuotes, setTotalQuotes] = useState<number>(0);

  const { mutate: fetchQuotes, isPending, error } = useGetQuotes();

  const handleFetchQuotes = (page: number = 1) => {
    fetchQuotes(
      { count, page, tagFilter },
      {
        onSuccess: (data) => {
          setQuotes(data.quotes);
          setTotalPages(data.totalPages);
          setCurrentPage(data.page);
          setTotalQuotes(data.totalQuotes);
        },
      }
    );
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    handleFetchQuotes(value);
  };

  return (
    <>
      <SearchContainer>
        <CountInput
          type="number"
          label="Number of Quotes"
          value={count}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value >= 1 && value <= 100) {
              setCount(value);
            }
          }}
          inputProps={{ 
            min: 1, 
            max: 100,
            inputMode: 'numeric',
            pattern: '[1-9][0-9]*'
          }}
        />
        <TagInput
          label="Filter by Tag"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          placeholder="Enter tag to filter"
        />
        <Button
          variant="contained"
          onClick={() => handleFetchQuotes(1)}
          disabled={isPending || !count || count < 1}
          size="large"
          sx={{ 
            height: '56px',
            width: '180px',
            fontSize: '1.1rem',
            px: 4,
            position: 'relative'
          }}
        >
          <span style={{ visibility: isPending ? 'hidden' : 'visible' }}>
            Get Quotes
          </span>
          {isPending && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px'
              }}
            />
          )}
        </Button>
      </SearchContainer>

      {error && (
        <Typography color="error" sx={{ mb: 2, px: 2 }}>
          Failed to fetch quotes. Please try again.
        </Typography>
      )}

      <ResultsContainer>
        {quotes.length === 0 && !isPending && <EmptyState />}
        {quotes.map((quote) => (
          <QuoteCard key={quote.id}>
            <QuoteText>
              "{quote.body}"
            </QuoteText>
            <AuthorText>
              {quote.author}
            </AuthorText>
            <TagsContainer>
              {quote.tags?.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: 'primary.light',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                />
              ))}
            </TagsContainer>
          </QuoteCard>
        ))}
      </ResultsContainer>

      {quotes.length > 0 && (
        <PaginationWrapper>
          <PaginationContainer>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Showing {quotes.length} of {totalQuotes} quotes
            </Typography>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </PaginationContainer>
        </PaginationWrapper>
      )}
    </>
  );
};

export default QuotesContainer; 