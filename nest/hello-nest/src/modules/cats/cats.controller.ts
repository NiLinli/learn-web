import { Controller, Get, Req, Post, HttpCode, Header, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './model/cat.model';
import { CatService } from './cats.service'

@Controller('cats')
export class CatsController {

  constructor(
    private readonly catService: CatService
  ) { }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    this.catService.create(createCatDto)
    return 'This action adds a new cat';
  }

  // params
  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} cat`;
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