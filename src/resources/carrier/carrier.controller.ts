import { Controller, Get } from "@nestjs/common";

import { CarriersService } from "./carrier.service";

@Controller("carriers")
export class CarriersController {
  constructor(private svc: CarriersService) {}

  @Get()
  async findAll() {
    const data = await this.svc.findAll();
    return {
      success: true,
      data,
    };
  }
}
