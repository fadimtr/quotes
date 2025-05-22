import styled from 'styled-components';
import { Box } from '@mui/material';

export const EmptyStateContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  min-height: 60vh;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    .MuiTypography-root {
      color: #1976d2;
    }

    img {
      transform: scale(1.05);
    }
  }
`;

export const EmptyStateIllustration = styled(Box)`
  margin-bottom: 2rem;

  img {
    max-width: 200px;
    height: auto;
    transition: transform 0.2s ease-in-out;
  }
`;

export const EmptyStateText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .MuiTypography-root {
    transition: color 0.2s ease-in-out;
  }
`;
