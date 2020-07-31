import { HttpException, NotAcceptableException } from '@nestjs/common';

export class DatabaseErrorTransformer {
  public static fromError(
    error: any,
  ): HttpException {
    let message: string = 'Mongo Database Error, please check';

    if (error instanceof Error && process.env.NODE_ENV !== 'production') {
      message = error.stack;
    }

    return new NotAcceptableException(
      message,
      error,
    );
  }
}
