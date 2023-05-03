import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { logger } from "~/middleware/logger.middleware";
import { ArticlesModule } from "~/resources/article/article.module";
import { CarriersModule } from "~/resources/carrier/carrier.module";
import { ShipmentsModule } from "~/resources/shipment/shipment.module";
import { WeatherModule } from "~/resources/weather/weather.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `config/.env.${
        process.env.NODE_ENV ? process.env.NODE_ENV : "local"
      }`,
    }),
    ShipmentsModule,
    ArticlesModule,
    CarriersModule,
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes("*");
  }
}
