import { IQuizModel } from "./model/IQuizModel";
import Joi = require("@hapi/joi");
import { OBJECT_ID_REGEX } from "src/core/common/regex";
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizValidator {
  public create(quiz: IQuizModel): IQuizModel {
    const schema: Joi.Schema = Joi.object().keys({
      mobileUserId: Joi
        .string()
        .regex(OBJECT_ID_REGEX)
        .required(),
      questionNumber: Joi
        .number()
        .min(1)
        .max(5)
        .required(),
      answer: Joi
        .string()
        .regex(/^(Yes|No)$/)
        .required()
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(quiz)
    );
  }
}
