import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";
import { WeatherModule } from "~/resources/weather/weather.module";

import { ShipmentsController } from "./shipment.controller";
import { ShipmentsService } from "./shipment.service";

@Module({
  imports: [
    CacheModule.register({
      ttl: 5 * 1000,
      max: 10,
    }),
    WeatherModule,
  ],
  controllers: [ShipmentsController],
  providers: [ShipmentsService, PrismaService],
  exports: [ShipmentsService],
})
export class ShipmentsModule {}
