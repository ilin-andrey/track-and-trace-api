import { Injectable } from "@nestjs/common";
import { Article, Prisma } from "@prisma/client";

import { PrismaService } from "~/prisma.service";

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    });
  }

  async findOne(sku: string): Promise<Article | null> {
    return this.prisma.article.findFirst({
      where: { sku },
    });
  }
}
