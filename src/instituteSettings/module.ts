import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { InstituteService } from './service';
import { InstituteController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InstituteSettingsSchema } from './schema';
import { InstituteSettingRepository } from './repository';
import { AuthenticationMiddleware } from 'src/middleware/auth';
import { RequestService } from 'src/request.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'instituteSettings', schema: InstituteSettingsSchema },
    ]),
  ],
  controllers: [InstituteController],
  providers: [InstituteService, InstituteSettingRepository,RequestService],
  // exports: [InstituteService],
})
export class InstituteSettingsModule implements NestModule
{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(AuthenticationMiddleware)
    .forRoutes(
    { path: "institute", method: RequestMethod.GET},)

    // .forRoutes('*')
  }
}
