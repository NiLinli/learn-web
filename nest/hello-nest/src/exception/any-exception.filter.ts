import { ExceptionFilter, HttpException, ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

// 所有异常
@Catch()
export class AllExceptionFilter implements ExceptionFilter {

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const isHttpException = exception instanceof HttpException;
    let responseStatus;
    let responseJson: Object = {
      timestamp: new Date().toISOString(),
      path: request.url
    };

    if (isHttpException) {
      responseStatus = (exception as HttpException).getStatus();
      responseJson = {
        ...responseJson,
        ...(exception as HttpException).getResponse() as Object
      };
    } else {
      responseStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      responseJson = {
        ...responseJson,
        message: 'Internal server error'
      };
    }

    response
      .status(responseStatus)
      .json(responseJson)
  }
}