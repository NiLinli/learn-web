import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service';
import { CatsLoggerMiddleware } from './middleware/cats-logger.middleware';

@Module({
  controllers: [
    CatsController
  ],
  providers: [CatService]
})
export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatsLoggerMiddleware)
      // 排除
      .exclude(
        { path: 'cats', method: RequestMethod.GET }
      )
      // path 支持通配符
      // .forRoutes({
      //   path: 'cats',
      //   method: RequestMethod.GET
      // });
      // 直接配置控制器
      .forRoutes(CatsController)
  }
}