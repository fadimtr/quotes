import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

export const Container = styled(Box)`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const LeftSection = styled(Box)`
  width: 33.33%;
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const RightSection = styled(Box)`
  width: 66.67%;
  padding: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 33.33%;
`;

export const Title = muiStyled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 700,
  textAlign: 'center',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  lineHeight: 1.2,
  '& .subtitle': {
    fontSize: '1.5rem',
    marginTop: '1rem',
    opacity: 0.9,
  }
}));

export const EmptyStateContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  min-height: 60vh;
`;

export const EmptyStateIllustration = styled(Box)`
  margin-bottom: 2rem;
`;

export const EmptyStateText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`; 