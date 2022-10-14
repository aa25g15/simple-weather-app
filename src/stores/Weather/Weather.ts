import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export class Weather {
  apiKey: string = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentCityWeather(): void {
    console.log("Hello!");
    console.log(this.apiKey);
  }
}

export const WeatherContext = createContext<Weather>({} as Weather);
