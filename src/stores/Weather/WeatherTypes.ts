export interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface CurrentWeather {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: Temperature;
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<WeatherData>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

export interface ForecastWeather {
  city: {
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: number;
  list: Array<{
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: Date;
    main: Temperature;
    pop: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    visibility: number;
    weather: Array<WeatherData>;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
  }>;
  message: number;
}
