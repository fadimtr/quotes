import styled from 'styled-components';
import { Box, Typography, IconButton } from '@mui/material';

interface SectionProps {
  isOpen: boolean;
}

export const Container = styled(Box)`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const LeftSection = styled(Box)<SectionProps>`
  width: ${props => props.isOpen ? '33.33%' : '50px'};
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.isOpen ? '2rem' : '0'};
  height: 100vh;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  flex-shrink: 0;
`;

export const RightSection = styled(Box)<SectionProps>`
  flex: 1;
  padding: 0;
  background: rgba(255,255,255,0.9);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled(Typography)`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  line-height: 1.2;
  white-space: nowrap;

  .subtitle {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0.9;
  }
`;

export const ToggleButton = styled(IconButton)<SectionProps>`
  position: fixed !important;
  left: ${props => props.isOpen ? 'calc(33.33% - 50px)' : '4px'};
  top: 20px;
  height: 40px !important;
  color: white !important;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  padding: 8px !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`; 