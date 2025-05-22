import React from 'react';
import { Typography } from '@mui/material';
import {
    EmptyStateContainer,
    EmptyStateIllustration,
    EmptyStateText,
} from './QuotesApp/QuotesApp.styles';
import emptyStateIllustration from '../assets/empty-state-illustration.svg';

const EmptyState: React.FC = () => (
  <EmptyStateContainer>
    <EmptyStateIllustration>
      <img src={emptyStateIllustration} alt="Empty state illustration" />
    </EmptyStateIllustration>
    <EmptyStateText>
      <Typography variant="h4" sx={{ mb: 2, color: 'text.primary', fontWeight: 500 }}>
        Welcome to Quotes of the Day
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '400px', textAlign: 'center', mb: 3 }}>
        Discover inspiring quotes from great minds. Use the search above to find quotes by tag or get random quotes.
      </Typography>
    </EmptyStateText>
  </EmptyStateContainer>
);

export default EmptyState; 