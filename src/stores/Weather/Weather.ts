import axios from "axios";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { City } from "../Cities/Cities";
import { CurrentWeather, ForecastWeather } from "./WeatherTypes";

export interface TemperatureData {
  mean: number;
  max: number;
  min: number;
  code: number;
}

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
  temperatureDataTomorrow: TemperatureData | null = null;
  temperatureDataDayAfter: TemperatureData | null = null;
  temperatureDataTwoDaysAfter: TemperatureData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  resetState(): void {
    this.gettingData = false;
    this.currentWeatherData = null;
    this.forecastWeatherData = null;
    this.temperatureDataTomorrow = null;
    this.temperatureDataDayAfter = null;
    this.temperatureDataTwoDaysAfter = null;
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
        this.resetState();
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

        // Calculate average temperature, max and min
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const dayAfter = new Date(today);
        dayAfter.setDate(today.getDate() + 2);
        const twoDaysAfter = new Date(today);
        twoDaysAfter.setDate(today.getDate() + 3);

        // We need to manually calculate averages, max and mins as the daily forecast
        // api is paid

        this.temperatureDataTomorrow = this.findMeanMaxMinTemperature(tomorrow);
        this.temperatureDataDayAfter = this.findMeanMaxMinTemperature(dayAfter);
        this.temperatureDataTwoDaysAfter =
          this.findMeanMaxMinTemperature(twoDaysAfter);
      });
  }

  findMeanMaxMinTemperature(date: Date): TemperatureData | null {
    if (!this.forecastWeatherData?.list) return null;

    const meanList: Array<number> = [];
    const maxList: Array<number> = [];
    const minList: Array<number> = [];
    const codeList: Array<number> = [];

    for (let i = 0; i < this.forecastWeatherData.list.length; i++) {
      const dateFromStamp = new Date(
        this.forecastWeatherData.list[i].dt * 1000 // Need to convert Unix timestamp to JS Date Timestamp
      );
      if (dateFromStamp.toLocaleDateString() === date.toLocaleDateString()) {
        // This entry is of the day we are targeting
        meanList.push(this.forecastWeatherData.list[i].main.temp);
        maxList.push(this.forecastWeatherData.list[i].main.temp_max);
        minList.push(this.forecastWeatherData.list[i].main.temp_min);
        codeList.push(this.forecastWeatherData.list[i].weather[0].id);
      }
    }

    return {
      mean: meanList.reduce((total, x) => total + x, 0) / meanList.length,
      max: maxList.reduce((max, x) => Math.max(max, x), Number.MIN_VALUE),
      min: minList.reduce((min, x) => Math.min(min, x), Number.MAX_VALUE),
      code: codeList[codeList.length / 2], // Since we cannot average codes, we will take the mid value of code
    };
  }
}

export const WeatherContext = createContext<Weather>({} as Weather);
