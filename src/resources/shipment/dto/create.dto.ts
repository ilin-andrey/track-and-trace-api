import * as Joi from "joi";

export class CreateDto {
  public trackingNumber: string;
  public senderZip: string;
  public senderCountry: string;
  public senderCity: string;
  public senderAddress: string;
  public receiverZip: string;
  public receiverCountry: string;
  public receiverCity: string;
  public receiverAddress: string;
  public carrierId: number;
  public articles: [
    {
      articleId: number;
      quantity: number;
    },
  ];
}

export const CreateSchema = Joi.object({
  trackingNumber: Joi.string().required().uppercase(),
  senderZip: Joi.string().required(),
  senderCountry: Joi.string().required(),
  senderCity: Joi.string().required(),
  senderAddress: Joi.string().required(),
  receiverZip: Joi.string().required(),
  receiverCountry: Joi.string().required(),
  receiverCity: Joi.string().required(),
  receiverAddress: Joi.string().required(),
  carrierId: Joi.number().required(),
  articles: Joi.array()
    .items(
      Joi.object({
        articleId: Joi.number().required(),
        quantity: Joi.number().required(),
      }),
    )
    .required(),
});
