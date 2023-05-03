import { Injectable } from "@nestjs/common";
import { Carrier } from "@prisma/client";

import { PrismaService } from "~/prisma.service";

@Injectable()
export class CarriersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Carrier[]> {
    return this.prisma.carrier.findMany();
  }
}
