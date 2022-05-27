import { HttpException, HttpStatus } from '@nestjs/common';

// 自定义 HTTP 异常, 同时 Nest 也内置了一些常见的异常
export class ForbiddenException extends HttpException {
  constructor() {
    super({
      message: 'Forbidden'
    }, HttpStatus.FORBIDDEN)
  }
}