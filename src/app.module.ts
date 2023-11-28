import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  Scope,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BookInstituteRelationModule } from './book-institute-relation/module';
import { InstituteSettingsModule } from './instituteSettings/module';
import { ReservationsModule } from './reservations/module';
import { SearchModule } from './search/module';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/auth';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Authguard } from './guards/auth';
import { LoggingInterceptor } from './interceptors/logging';
import { FreezePipe } from './pipes/freezePipe';
import { exceptionFilter } from './filters/http-exception';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
    BooksModule,
    BookInstituteRelationModule,
    InstituteSettingsModule,
    ReservationsModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    RequestService,
    {
      provide: APP_GUARD,
      useClass: Authguard,
    },
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: exceptionFilter,
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: FreezePipe
    // }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.GET });
    // .forRoutes('*')
  }
}
