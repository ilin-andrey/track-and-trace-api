import { Controller, Get, Param } from "@nestjs/common";

import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
  constructor(private svc: WeatherService) {}

  @Get(":zipCode")
  async findOne(@Param("zipCode") zipCode: string) {
    const data = await this.svc.findOne(zipCode);
    return {
      success: true,
      data,
    };
  }
}
