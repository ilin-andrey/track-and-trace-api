import { Injectable } from "@nestjs/common";
import { Prisma, Shipment } from "@prisma/client";

import { PrismaService } from "~/prisma.service";
import { WeatherService } from "~/resources/weather/weather.service";

import { ShipmentWithWeather } from "./interfaces/shipment.interface";

@Injectable()
export class ShipmentsService {
  constructor(
    private prisma: PrismaService,
    private readonly weatherService: WeatherService,
  ) {}

  async create(data: Prisma.ShipmentCreateInput): Promise<Shipment> {
    return this.prisma.shipment.create({
      data,
    });
  }

  async findOne(trackingNumber: string): Promise<ShipmentWithWeather | null> {
    const data = await this.prisma.shipment.findFirst({
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

    if (data) {
      const weather = await this.weatherService.findOne(data.receiverZip);

      if (weather) {
        return { ...data, weather };
      }
    }

    return data;
  }
}
