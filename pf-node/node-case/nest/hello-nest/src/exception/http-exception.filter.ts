import { ExceptionFilter, HttpException, ArgumentsHost, Catch } from '@nestjs/common';
import { Request, Response } from 'express';

// 告诉 Nest这个特定的过滤器正在寻找 HttpException 而不是其他的
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log('http')
    response
      .status(status)
      .json({
        ...exception.getResponse() as Object,
        timestamp: new Date().toISOString(),
        path: request.url
      })
  }
}