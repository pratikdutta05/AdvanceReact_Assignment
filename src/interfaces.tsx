export interface City {
  id: number;
  name: string;
  weather: Weather[];
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
}
