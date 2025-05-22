import { useMutation } from '@tanstack/react-query';
import { fetchQuotes } from '../api/quotes';

export const useGetQuotes = () => {
  return useMutation({
    mutationFn: fetchQuotes,
  });
}; 