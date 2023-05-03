import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";

import { ArticlesController } from "./article.controller";
import { ArticlesService } from "./article.service";

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
