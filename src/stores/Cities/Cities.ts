import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import citiesImported from "../../data/cities-fr.json";

export interface City {
  id: number;
  nm: string;
  lat: number;
  lon: number;
}

export class Cities {
  cities: Array<City> = citiesImported;

  constructor() {
    makeAutoObservable(this);
  }
}

export const CitiesContext = createContext<Cities>({} as Cities);
