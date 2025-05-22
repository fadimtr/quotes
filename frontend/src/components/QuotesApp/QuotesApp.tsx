import React from 'react';
import {
  Container,
  LeftSection,
  RightSection,
  Title,
} from './QuotesApp.styles';
import QuotesContainer from '../QuotesContainer/QuotesContainer';

const QuotesApp: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <Title variant="h1">
          Quotes Of The Day
          <div className="subtitle">by Fadi</div>
        </Title>
      </LeftSection>
      
      <RightSection>
        <QuotesContainer />
      </RightSection>
    </Container>
  );
};

export default QuotesApp; 