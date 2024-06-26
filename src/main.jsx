import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
import './index.css';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
