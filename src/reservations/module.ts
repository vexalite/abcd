import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReservationsService } from './service';
import { ReservationsController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationsSchema } from './schema';
import { ReservationRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { BookInstituteSchema } from 'src/book-institute-relation/schema';
import { InstituteSettingsSchema } from 'src/instituteSettings/schema';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';
import { RequestService } from 'src/request.service';
import { AuthenticationMiddleware } from 'src/middleware/auth';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Reservation', schema: ReservationsSchema },
    ]),
    MongooseModule.forFeature([
      { name: 'BookInstitute', schema: BookInstituteSchema },
    ]),
    MongooseModule.forFeature([
      { name: 'instituteSettings', schema: InstituteSettingsSchema },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    ReservationRepository,
    BookInstitutesRepository,
    InstituteSettingRepository,
    RequestService
  ],
})
export class ReservationsModule
implements NestModule
{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(AuthenticationMiddleware)
    .forRoutes(
    { path: "reservations/all", method: RequestMethod.GET},
    { path: "reservations/:id", method: RequestMethod.GET},
    { path: "reservations/status/:bookid", method: RequestMethod.GET},
    { path: "reservations/book/:bookid", method: RequestMethod.GET},
    { path: "reservations/patron/:patronid", method: RequestMethod.GET},
    { path: "reservations/h/book/:bookid", method: RequestMethod.GET},
    { path: "reservations/h/patron/:patronid", method: RequestMethod.GET},
    { path: "reservations", method: RequestMethod.POST})

    // .forRoutes('*')
  }
}
