import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cats/cats.module';
import { RedirectModule } from './modules/redirect/redirect.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './exception/any-exception.filter';

@Module({
  imports: [
    CatModule,
    RedirectModule,
    ExceptionModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter
    // },
    AppService
  ],
})
export class AppModule { }
