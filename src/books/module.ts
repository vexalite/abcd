import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BooksService } from './service';
import { BooksController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema';
import { BooksRepository } from './repository';
import { BookInstitutesService } from 'src/book-institute-relation/service';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { BookInstituteSchema } from 'src/book-institute-relation/schema';
import { AuthenticationMiddleware } from 'src/middleware/auth';
import { RequestService } from 'src/request.service';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';
import { InstituteSettingsSchema } from 'src/instituteSettings/schema';
import { ReservationRepository } from 'src/reservations/repository';
import { ReservationsSchema } from 'src/reservations/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    MongooseModule.forFeature([
      { name: 'Reservation', schema: ReservationsSchema },
    ]),
    MongooseModule.forFeature([
      { name: 'BookInstitute', schema: BookInstituteSchema },
    ]),
    MongooseModule.forFeature([
      { name: 'instituteSettings', schema: InstituteSettingsSchema },
    ])
  ],
  controllers: [BooksController],
  providers: [
    BooksService,
    BooksRepository,
    BookInstitutesService,
    BookInstitutesRepository,
    InstituteSettingRepository,
    RequestService,
    ReservationRepository
  ],
})
export class BooksModule 
implements NestModule
{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(AuthenticationMiddleware)
    .forRoutes(
    { path: "books/:isbn", method: RequestMethod.POST},
    { path: "books", method: RequestMethod.GET},
    { path: "books/:id", method: RequestMethod.GET},
    { path: "books/totalbooks", method: RequestMethod.GET})

    // .forRoutes('*')
  }
}
