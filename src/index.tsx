import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyle from './Global.styles';
import theme from './config/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
