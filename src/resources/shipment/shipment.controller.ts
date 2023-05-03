import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { JoiValidationPipe } from "~/pipes/validation.pipe";

import { CreateDto, CreateSchema } from "./dto/create.dto";
import { ShipmentsService } from "./shipment.service";

@Controller("shipments")
export class ShipmentsController {
  constructor(private svc: ShipmentsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(CreateSchema))
  async create(@Body() payload: CreateDto) {
    const articlesInput = payload.articles.map((i) => ({
      articleId: i.articleId,
      quantity: i.quantity,
    }));
    const input: Prisma.ShipmentCreateInput = {
      ...payload,
      carrier: {
        connect: { id: payload.carrierId },
      },
      articlesOnShipment: {
        create: articlesInput,
      },
    };
    const data = await this.svc.create(input);

    return { success: true, data };
  }

  @Get(":trackingNumber")
  async findOne(@Param("trackingNumber") trackingNumber: string) {
    const data = await this.svc.findOne(trackingNumber);
    return {
      success: true,
      data,
    };
  }
}
