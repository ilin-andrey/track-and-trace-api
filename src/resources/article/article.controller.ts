import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";

import { JoiValidationPipe } from "~/pipes/validation.pipe";

import { ArticlesService } from "./article.service";
import { CreateDto, CreateSchema } from "./dto/create.dto";

@Controller("articles")
export class ArticlesController {
  constructor(private svc: ArticlesService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(CreateSchema))
  async create(@Body() payload: CreateDto) {
    const data = await this.svc.create(payload);

    return { success: true, data };
  }

  @Get(":sku")
  async findOne(@Param("sku") sku: string) {
    const data = await this.svc.findOne(sku);
    return {
      success: true,
      data,
    };
  }
}
