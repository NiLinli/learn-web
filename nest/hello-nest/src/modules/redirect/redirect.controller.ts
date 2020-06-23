import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('redirect')
export class RedirectController {
  @Get('search')
  @Redirect('https://www.google.com', 301)
  redirectGoogle(@Query('p') platform) {
    if (platform === 'baidu') {
      return {
        url: 'https://www.baidu.com',
        statusCode: 401
      }
    }
  }
}