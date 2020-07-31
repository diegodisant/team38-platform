import { HttpException, HttpStatus } from "@nestjs/common";

export class HttpExceptionTransformer {
  public static fromError(
    error: any,
    status: number = HttpStatus.INTERNAL_SERVER_ERROR,
  ): HttpException {
    let message: string = '';

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    }

    return new HttpException(message, status);
  }
}
