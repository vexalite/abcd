/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ReservationsService } from './service';
import { CreateReservationDto, ReturnBookDto } from './dto/create-reservation.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    issueBook(body: CreateReservationDto): Promise<string | import("./schema").Reservation>;
    reIssueBook(id: string): Promise<string | import("./schema").Reservation>;
    returnBook(body: ReturnBookDto, id: string): Promise<string | import("./schema").Reservation>;
    overdue(id: string): Promise<number>;
    findByBook(bookid: string): Promise<{
        quantity: number;
        availability: number;
        reservations: import("./schema").Reservation[];
    }>;
    findByPatron(patronid: string): Promise<import("./schema").Reservation[]>;
    findBookHistory(bookid: string): Promise<import("./schema").Reservation[]>;
    findPatronHistory(patronid: string): Promise<import("./schema").Reservation[]>;
    findAll(): Promise<import("./schema").Reservation[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema").Reservation> & import("./schema").Reservation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    status(bookid: string): Promise<number>;
}
