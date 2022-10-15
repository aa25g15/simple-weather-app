import axios from "axios";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { City } from "../Cities/Cities";
import { CurrentWeather, ForecastWeather } from "./WeatherTypes";

export class Weather {
  apiKey: string = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;
  endPointCurrent: string = process.env
    .REACT_APP_OPEN_WEATHER_ENDPOINT_CURRENT as string;
  endPointForecast: string = process.env
    .REACT_APP_OPEN_WEATHER_ENDPOINT_FORECAST as string;
  currentWeatherData: CurrentWeather | null = null;
  forecastWeatherData: ForecastWeather | null = null;
  gettingData: boolean = true;
  init: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getAllWeatherData(city: City) {
    if (this.gettingData && !this.init) return;

    this.gettingData = true;
    this.init = false;
    this.error = null;

    await Promise.all([
      this.getCurrentCityWeather(city),
      this.getCurrentCityForecast(city),
    ])
      .then(() => {
        this.gettingData = false;
      })
      .catch(() => {
        this.gettingData = false;
        this.currentWeatherData = null;
        this.forecastWeatherData = null;
        this.error = "Something went wrong...";
      });
  }

  async getCurrentCityWeather(city: City) {
    await axios
      .get<CurrentWeather>(this.endPointCurrent, {
        params: {
          lat: city.lat.toFixed(2),
          lon: city.lon.toFixed(2),
          appid: this.apiKey,
          units: "metric",
        },
      })
      .then((res) => {
        this.currentWeatherData = res.data;
      });
  }

  async getCurrentCityForecast(city: City) {
    await axios
      .get<ForecastWeather>(this.endPointForecast, {
        params: {
          lat: city.lat.toFixed(2),
          lon: city.lon.toFixed(2),
          appid: this.apiKey,
          units: "metric",
        },
      })
      .then((res) => {
        this.forecastWeatherData = res.data;
      });
  }
}

export const WeatherContext = createContext<Weather>({} as Weather);
