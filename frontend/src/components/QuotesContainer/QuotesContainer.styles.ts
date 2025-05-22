import styled from 'styled-components';
import { Box, Card, TextField, Typography } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

export const SearchContainer = styled(Box)`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 10%);
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
`;

export const CountInput = muiStyled(TextField)(({ theme }) => ({
  flex: 1,
  '& .MuiOutlinedInput-root': {
    fontSize: '1.2rem',
    height: '56px',
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: 'white',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    '& input::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

export const TagInput = muiStyled(TextField)(({ theme }) => ({
  flex: 1,
  '& .MuiOutlinedInput-root': {
    fontSize: '1.1rem',
    height: '56px',
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: 'white',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    '& input::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

export const QuoteCard = muiStyled(Card)(({ theme }) => ({
  width: '100%',
  marginBottom: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  '& .MuiCardContent-root': {
    padding: '1.5rem',
  },
}));

export const QuoteText = muiStyled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  marginBottom: '0.2rem',
  color: theme.palette.text.primary,
  padding: '1rem 1rem 0 1rem',
}));

export const AuthorText = muiStyled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: '1rem',
  color: theme.palette.primary.main,
  padding: '1rem 1rem 0 1rem',
}));

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ResultsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem;
  flex: 1;
`;

export const PaginationWrapper = styled(Box)`
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 10%);
  margin-top: auto;
`;

export const PaginationContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`; 