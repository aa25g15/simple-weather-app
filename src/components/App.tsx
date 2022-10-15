import { ReactElement, useContext } from 'react';
import { StyledAppContainer, WeatherCardContainer } from './App.styles';
import Card from './Card/Card';
import Header from './Header/Header';
import Weather from './Weather/Weather';
import { WeatherCodes } from '../data/weatherCodes';
import { WeatherContext } from '../stores/Weather/Weather';
import { observer } from 'mobx-react-lite';

const App = observer((): ReactElement => {
  const weatherContext = useContext(WeatherContext);

  const getWeatherType = (): keyof typeof WeatherCodes | null => {
    let weatherType: keyof typeof WeatherCodes | null = null;
    const code = weatherContext.currentWeatherData?.weather[0].id;

    if(code){
      (Object.keys(WeatherCodes) as Array<keyof typeof WeatherCodes>).forEach((key) => {
        if(WeatherCodes[key].find(x => x === code)){
          weatherType = key;
        }
      });
    }

    if(!weatherType) {
      console.warn("No code matched");
    }

    return weatherType;
  }
  
  return (
    <StyledAppContainer className="app-container">
      <Header></Header>
      <Card weather={getWeatherType()}>
        <WeatherCardContainer>
          <Card weather='solidWhiteSmoke'>
            <Weather></Weather>
          </Card>
        </WeatherCardContainer>
      </Card>
    </StyledAppContainer>
  );
})

export default App;
