import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";

import { CarriersController } from "./carrier.controller";
import { CarriersService } from "./carrier.service";

@Module({
  controllers: [CarriersController],
  providers: [CarriersService, PrismaService],
  exports: [CarriersService],
})
export class CarriersModule {}
