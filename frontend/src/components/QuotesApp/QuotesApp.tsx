import React, { useState } from 'react';
import {
  Container,
  LeftSection,
  RightSection,
  Title,
  ToggleButton,
} from './QuotesApp.styles';
import QuotesContainer from '../QuotesContainer/QuotesContainer';
import quotelyLogo from '../../assets/quotely-white.png';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const QuotesApp: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(true);

  const toggleLeftSection = () => {
    setIsLeftOpen(!isLeftOpen);
  };

  return (
    <Container>
      <LeftSection isOpen={isLeftOpen}>
        <Title variant="h1">
          <img 
            src={quotelyLogo} 
            alt="Quotely" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              marginBottom: '1rem'
            }} 
          />
        </Title>
      </LeftSection>
      
      <ToggleButton 
        onClick={toggleLeftSection}
        isOpen={isLeftOpen}
        aria-label={isLeftOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isLeftOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </ToggleButton>

      <RightSection isOpen={isLeftOpen}>
        <QuotesContainer />
      </RightSection>
    </Container>
  );
};

export default QuotesApp; 