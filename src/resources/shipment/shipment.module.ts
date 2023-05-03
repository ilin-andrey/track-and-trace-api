import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";

import { ShipmentsController } from "./shipment.controller";
import { ShipmentsService } from "./shipment.service";

@Module({
  controllers: [ShipmentsController],
  providers: [ShipmentsService, PrismaService],
  exports: [ShipmentsService],
})
export class ShipmentsModule {}
