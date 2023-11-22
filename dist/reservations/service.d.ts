import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './schema';
import { ReservationRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';
export declare class ReservationsService {
    private readonly reservationRepository;
    private readonly bookInstitutesRepository;
    private readonly instituteSettingRepository;
    constructor(reservationRepository: ReservationRepository, bookInstitutesRepository: BookInstitutesRepository, instituteSettingRepository: InstituteSettingRepository);
    issue(body: CreateReservationDto): Promise<Reservation | string>;
    reIssueBook(id: string): Promise<Reservation | string>;
    returnBook(body: CreateReservationDto, id: string): Promise<Reservation | string>;
    overdue(id: string): Promise<number>;
    findAll(id: string): Promise<Reservation[]>;
    findOne(id: string): Promise<Reservation>;
}
