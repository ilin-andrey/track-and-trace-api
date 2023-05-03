import { Shipment } from "@prisma/client";

import { IWeather } from "~/resources/weather/interfaces/weather.interface";

export interface ShipmentWithWeather extends Shipment {
  weather?: IWeather;
}
