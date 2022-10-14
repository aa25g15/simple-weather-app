import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyle from './Global.styles';
import theme from './config/theme';
import { ThemeProvider } from 'styled-components';
import { Cities, CitiesContext } from './stores/Cities/Cities';
import { Weather, WeatherContext } from './stores/Weather/Weather';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CitiesContext.Provider value={new Cities()}>
      <WeatherContext.Provider value={new Weather()}>
        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <App />
        </ThemeProvider>
      </WeatherContext.Provider>
    </CitiesContext.Provider>
  </React.StrictMode>
);
