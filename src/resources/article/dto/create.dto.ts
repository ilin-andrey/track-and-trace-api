import * as Joi from "joi";

export class CreateDto {
  public sku: string;
  public name: string;
  public price: number | undefined;
}

export const CreateSchema = Joi.object({
  sku: Joi.string().required().uppercase(),
  name: Joi.string().required().lowercase(),
  price: Joi.number(),
});
