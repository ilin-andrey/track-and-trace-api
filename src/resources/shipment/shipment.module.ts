import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";
import { WeatherModule } from "~/resources/weather/weather.module";

import { ShipmentsController } from "./shipment.controller";
import { ShipmentsService } from "./shipment.service";

@Module({
  imports: [WeatherModule],
  controllers: [ShipmentsController],
  providers: [ShipmentsService, PrismaService],
  exports: [ShipmentsService],
})
export class ShipmentsModule {}
