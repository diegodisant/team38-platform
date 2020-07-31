import { HttpException, NotAcceptableException } from '@nestjs/common';
import { ValidationError } from '@hapi/joi';

export class ValidationErrorTransformer {
  public static fromError(
    validationErrors: ValidationError,
  ): HttpException {
    let message: string = 'Validation errors, please check your request body';
    const errors: any = validationErrors;

    if (validationErrors && process.env.NODE_ENV !== 'production') {
      message = validationErrors.stack;
    }

    return new NotAcceptableException(
      message,
      errors,
    );
  }
}
