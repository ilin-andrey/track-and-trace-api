export interface IWeather {
  city: string;
  lastUpdatedAt: Date;
  values: Record<string, unknown>;
}
