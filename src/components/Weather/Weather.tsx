import { Fragment, ReactElement, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { WeatherContext } from '../../stores/Weather/Weather';
import { CitiesContext } from '../../stores/Cities/Cities';
import { StyledWeatherInfoContainer } from './Weather.styles';
import AnimatedLoader from '../AnimatedLoader/AnimatedLoader';

const Weather = observer((): ReactElement => {
  const weatherContext = useContext(WeatherContext);
  const cityContext = useContext(CitiesContext);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const today = new Date();
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today)
  dayAfter.setDate(today.getDate() + 2);
  const twoDaysAfter = new Date(today)
  twoDaysAfter.setDate(today.getDate() + 3);

  useEffect(() => {
    weatherContext.getAllWeatherData(cityContext.selectedCity);
  }, [cityContext.selectedCity, weatherContext]);

  if(weatherContext.gettingData) {
    return (
        <AnimatedLoader></AnimatedLoader>
    )
  }

  return (
    <StyledWeatherInfoContainer>
        <div className='current-weather'>
            <div className='city-name'>
                {weatherContext.currentWeatherData?.name}
            </div>
            <div className='current-weather-data'>
                <div className='current-temperature-container'>
                    <div className='current-temperature'>{weatherContext.currentWeatherData?.main.temp.toFixed(0)}</div>
                    <div className='current-temperature-high'>{weatherContext.currentWeatherData?.main.temp_max.toFixed(0)}</div>
                    <div className='current-temperature-low'>{weatherContext.currentWeatherData?.main.temp_min.toFixed(0)}</div>
                </div>
                <div className='current-additional-info'>
                    <div className='current-description'>{weatherContext.currentWeatherData?.weather[0].description}</div>
                    <div className='wi'>
                        <div
                        className={`weather-icon wi wi-icon-${weatherContext.currentWeatherData?.weather[0].id}`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='forecast-data'>
            <div className='day-container'>
                <div className='day-name'>
                    {days[tomorrow.getDay()]}
                </div>
                <div className='wi'>
                    <div
                    className={`weather-icon wi wi-icon-${weatherContext.forecastWeatherData?.list[1].weather[0].id}`}
                    ></div>
                </div>
                <div className='forecast-temperature-container'>
                    <div className='forecast-temperature'>{weatherContext.forecastWeatherData?.list[1].main.temp.toFixed(0)}</div>
                    <div className='forecast-temperature-high'>{weatherContext.forecastWeatherData?.list[1].main.temp_max.toFixed(0)}</div>
                    <div className='forecast-temperature-low'>{weatherContext.forecastWeatherData?.list[1].main.temp_min.toFixed(0)}</div>
                </div>
            </div>
            <div className='day-container'>
                <div className='day-name'>
                    {days[dayAfter.getDay()]}
                </div>
                <div className='wi'>
                    <div
                    className={`weather-icon wi wi-icon-${weatherContext.forecastWeatherData?.list[2].weather[0].id}`}
                    ></div>
                </div>
                <div className='forecast-temperature-container'>
                    <div className='forecast-temperature'>{weatherContext.forecastWeatherData?.list[2].main.temp.toFixed(0)}</div>
                    <div className='forecast-temperature-high'>{weatherContext.forecastWeatherData?.list[2].main.temp_max.toFixed(0)}</div>
                    <div className='forecast-temperature-low'>{weatherContext.forecastWeatherData?.list[2].main.temp_min.toFixed(0)}</div>
                </div>
            </div>
            <div className='day-container'>
                <div className='day-name'>
                    {days[twoDaysAfter.getDay()]}
                </div>
                <div className='wi'>
                    <div
                    className={`weather-icon wi wi-icon-${weatherContext.forecastWeatherData?.list[3].weather[0].id}`}
                    ></div>
                </div>
                <div className='forecast-temperature-container'>
                    <div className='forecast-temperature'>{weatherContext.forecastWeatherData?.list[3].main.temp.toFixed(0)}</div>
                    <div className='forecast-temperature-high'>{weatherContext.forecastWeatherData?.list[3].main.temp_max.toFixed(0)}</div>
                    <div className='forecast-temperature-low'>{weatherContext.forecastWeatherData?.list[3].main.temp_min.toFixed(0)}</div>
                </div>
            </div>
        </div>
    </StyledWeatherInfoContainer>
  );
});

export default Weather;
