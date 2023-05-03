import { Injectable } from "@nestjs/common";
import { Prisma, Shipment } from "@prisma/client";

import { PrismaService } from "~/prisma.service";

@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ShipmentCreateInput): Promise<Shipment> {
    return this.prisma.shipment.create({
      data,
    });
  }

  async findOne(trackingNumber: string): Promise<Shipment | null> {
    return this.prisma.shipment.findFirst({
      where: { trackingNumber },
      include: {
        carrier: {
          select: {
            name: true,
          },
        },
        articlesOnShipment: {
          select: {
            article: {
              select: {
                id: false,
                sku: true,
                name: true,
                price: true,
                createdAt: true,
                updatedAt: true,
              },
            },
            quantity: true,
          },
        },
      },
    });
  }
}
