import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";

import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer()).get("/").expect(403);
  });

  it("/shipments (GET)", () => {
    return request(app.getHttpServer()).get("/shipments").expect(404);
  });

  it("/articles (GET)", () => {
    return request(app.getHttpServer()).get("/articles").expect(404);
  });

  it("/carriers (GET)", () => {
    return request(app.getHttpServer()).get("/carriers").expect(200);
  });
});
