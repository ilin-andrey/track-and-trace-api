import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(input: any) {
    const { value, error } = this.schema.validate(input);

    if (error) {
      const errorMessages = error.details.map((d) => d.message).join();
      throw new BadRequestException(`Validation failed: ${errorMessages}`);
    }

    return value;
  }
}
