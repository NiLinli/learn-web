import { Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ForbiddenException } from '../../exception/forbidden.exception'

@Controller('exception')
export class ExceptionController {
  @Get()
  async findAll() {
    console.log(123)
    throw new ForbiddenException();
  }

  @Post()
  async AddOne() {
    const a = undefined;

    (a as number).toFixed(2);
    return 123;
  }
}
