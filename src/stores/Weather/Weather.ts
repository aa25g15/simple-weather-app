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
  gettingData: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getAllWeatherData(city: City) {
    if (this.gettingData) return;

    this.gettingData = true;
    await Promise.all([
      this.getCurrentCityWeather(city),
      this.getCurrentCityForecast(city),
    ]).then(() => {
      this.gettingData = false;
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
      })
      .catch(() => {
        this.currentWeatherData = null;
        console.error("Something went wrong");
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
      })
      .catch(() => {
        this.forecastWeatherData = null;
        console.error("Something went wrong");
      });
  }
}

export const WeatherContext = createContext<Weather>({} as Weather);
