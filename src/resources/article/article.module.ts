import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";

import { ArticlesController } from "./article.controller";
import { ArticlesService } from "./article.service";

@Module({
  imports: [
    CacheModule.register({
      ttl: 5 * 1000,
      max: 10,
    }),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
