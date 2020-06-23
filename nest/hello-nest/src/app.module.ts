import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cats/cats.module';
import { RedirectModule } from './modules/redirect/redirect.module';

@Module({
  imports: [
    CatModule,
    RedirectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
