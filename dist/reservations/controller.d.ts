import { ReservationsService } from './service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    issueBook(body: CreateReservationDto): Promise<string | import("./schema").Reservation>;
    reIssueBook(id: string): Promise<string | import("./schema").Reservation>;
    returnBook(body: CreateReservationDto, id: string): Promise<string | import("./schema").Reservation>;
    overdue(id: string): Promise<number>;
    findByBook(bookid: string): Promise<import("./schema").Reservation[]>;
    findByPatron(patronid: string): Promise<import("./schema").Reservation[]>;
    findAll(): Promise<import("./schema").Reservation[]>;
    findOne(id: string): Promise<import("./schema").Reservation>;
}
