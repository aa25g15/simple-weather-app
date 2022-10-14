import { ReactElement } from 'react';
import { StyledAppContainer, WeatherCardContainer } from './App.styles';
import Card from './Card/Card';
import Header from './Header/Header';
import Weather from './Weather/Weather';

function App(): ReactElement {
  return (
    <StyledAppContainer className="app-container">
      <Header></Header>
      <Card weather='sunny'>
        <WeatherCardContainer>
          <Card>
            <Weather></Weather>
          </Card>
        </WeatherCardContainer>
      </Card>
    </StyledAppContainer>
  );
}

export default App;
