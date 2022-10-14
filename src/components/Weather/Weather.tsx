import { Fragment, ReactElement, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { WeatherContext } from '../../stores/Weather/Weather';

const Weather = observer((): ReactElement => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getCurrentCityWeather();
  }, [])

  return (
    <Fragment>
        
    </Fragment>
  );
});

export default Weather;
