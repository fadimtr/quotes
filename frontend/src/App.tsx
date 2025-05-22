import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QuotesApp from './components/QuotesApp/QuotesApp';
import { AppContainer } from './App.styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <QuotesApp />
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App; 