import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, UsePipes, SetMetadata, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './model/cat.model';
import { CatService } from './cats.service'
import { ValidationPipe } from '../../pipe/validation.pipe';
import { ParseIntPipe } from '../../pipe/parse-int.pipe';
import { Roles } from '../../decorator/roles.decorator';
import { LoggingInterceptor } from '../../interceptor/logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {

  constructor(
    private readonly catService: CatService
  ) { }


  
  @Roles('admin')
  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    this.catService.create(createCatDto)
    return 'This action adds a new cat';
  }

  // params
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id): string {
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAll(@Req() request: Request): Promise<Cat[]> {
    // Nest 将自行解析返回的 Promise
    return this.catService.findAll();
  }

  @Get('ab*cd')
  findWildCard(): string {
    return 'This route uses a wildcard';
  }
}