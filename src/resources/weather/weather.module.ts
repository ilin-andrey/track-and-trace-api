import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";

import { CACHE_TTL } from "./consts";
import { WeatherController } from "./weather.controller";
import { WeatherService } from "./weather.service";

@Module({
  imports: [
    CacheModule.register({
      ttl: CACHE_TTL, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [WeatherService],
})
export class WeatherModule {}
