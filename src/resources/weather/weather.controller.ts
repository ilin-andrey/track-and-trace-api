import { Controller, Get, Param } from "@nestjs/common";

import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
  constructor(private svc: WeatherService) {}

  @Get(":city")
  async findOne(@Param("city") city: string) {
    const data = await this.svc.findOne(city);
    return {
      success: true,
      data,
    };
  }
}
