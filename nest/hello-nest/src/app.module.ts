import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cats/cats.module';
import { RedirectModule } from './modules/redirect/redirect.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { AllExceptionFilter } from './exception/any-exception.filter';
import { RolesGuard } from './middleware/roles.guard';

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
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard
    // },
    AppService
  ],
})
export class AppModule { }
