import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cache } from "cache-manager";

import { IWeather } from "./interfaces/weather.interface";
import { getCurrentWeather, getCurrentWeatherQueryURL } from "./utils";

@Injectable()
export class WeatherService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService,
  ) {}

  async findOne(zipCode: string): Promise<IWeather | null> {
    const weatherApiURL = this.configService.get<string>("WEATHER_API_URL");
    const weatherApiKey = this.configService.get<string>("WEATHER_API_KEY");

    if (!weatherApiURL || !weatherApiKey) {
      return null;
    }

    const value: IWeather | undefined = await this.cacheManager.get(zipCode);

    if (value) return value;

    const url = getCurrentWeatherQueryURL(
      weatherApiURL,
      zipCode,
      weatherApiKey,
    );
    const data = await getCurrentWeather(url);

    if (!data) return null;

    const ret = {
      zipCode,
      lastUpdatedAt: new Date(),
      values: { ...data },
    };
    await this.cacheManager.set(zipCode, ret);

    return ret;
  }
}
