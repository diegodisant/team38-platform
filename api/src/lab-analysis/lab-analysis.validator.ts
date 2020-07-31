import { Injectable } from "@nestjs/common";
import { ILabAnalysisModel } from "./model/ILabAnalysisModel";
import Joi = require("@hapi/joi");
import { OBJECT_ID_REGEX } from "src/core/common/regex";
import { ApiValidationTransformer } from "src/core/transformer/validation/ApiValidationTransformer";

@Injectable()
export class LabAnalysisValidator {
  public create(analysis: ILabAnalysisModel): ILabAnalysisModel {
    const schema: Joi.Schema = Joi.object().keys({
      mobileUserId: Joi
        .string()
        .regex(OBJECT_ID_REGEX)
        .required(),
      labName: Joi
        .string()
        .required(),
      status: Joi
        .boolean()
        .required()
    });

    return ApiValidationTransformer.fromValidationResult(
      schema.validate(analysis)
    );
  }
}
