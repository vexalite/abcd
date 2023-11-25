import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './schema';
import { ReservationRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';
import { RequestService } from 'src/request.service';
export declare class ReservationsService {
    private readonly requestService;
    private readonly reservationRepository;
    private readonly bookInstitutesRepository;
    private readonly instituteSettingRepository;
    private instituteId;
    constructor(requestService: RequestService, reservationRepository: ReservationRepository, bookInstitutesRepository: BookInstitutesRepository, instituteSettingRepository: InstituteSettingRepository);
    issue(body: CreateReservationDto): Promise<Reservation | string>;
    reIssueBook(id: string): Promise<Reservation | string>;
    returnBook(body: CreateReservationDto, id: string): Promise<Reservation | string>;
    overdue(id: string): Promise<number>;
    findAll(): Promise<Reservation[]>;
    findAllByBook(bookid: string): Promise<Reservation[]>;
    findAllByPatron(patronid: string): Promise<Reservation[]>;
    findOne(id: string): Promise<Reservation>;
}
