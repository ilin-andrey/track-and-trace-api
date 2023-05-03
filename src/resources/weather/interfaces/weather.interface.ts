export interface IWeather {
  zipCode: string;
  lastUpdatedAt: Date;
  values: Record<string, unknown>;
}
