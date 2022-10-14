import { ReactElement } from 'react';
import { StyledAppContainer, WeatherCardContainer } from './App.styles';
import Card from './Card/Card';
import Header from './Header/Header';

function App(): ReactElement {
  return (
    <StyledAppContainer className="app-container">
      <Header></Header>
      <Card weather='sunny'>
        <WeatherCardContainer>
          <Card></Card>
        </WeatherCardContainer>
      </Card>
    </StyledAppContainer>
  );
}

export default App;
