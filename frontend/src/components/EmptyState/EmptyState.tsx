import React from 'react';
import { Typography } from '@mui/material';
import {
  EmptyStateContainer,
  EmptyStateIllustration,
  EmptyStateText,
} from './EmptyState.styles';
import quotelyIcon from '../../assets/quotely-icon.png';

interface EmptyStateProps {
  onGenerateQuotes: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onGenerateQuotes }) => (
  <EmptyStateContainer onClick={onGenerateQuotes}>
    <EmptyStateIllustration>
      <img src={quotelyIcon} alt="Quotely icon" />
    </EmptyStateIllustration>
    <EmptyStateText>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        Ready to Discover Inspiring Quotes?
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '400px', mb: 3 }}>
        Click anywhere to generate your first set of quotes. You can customize the number of quotes and filter by tags using the controls above.
      </Typography>
    </EmptyStateText>
  </EmptyStateContainer>
);

export default EmptyState; 