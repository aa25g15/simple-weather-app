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
  selectedCity: City = citiesImported[0];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCity(selectedId: number): void {
    const city = this.cities.find((x) => x.id === selectedId);

    if (city) {
      this.selectedCity = city;
    }
  }

  // We can implement methods here to get cities data from an API
}

export const CitiesContext = createContext<Cities>({} as Cities);
