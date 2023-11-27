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
import { CreateReservationDto, ReturnBookDto } from './dto/create-reservation.dto';
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
    private calculateOverdueCharges;
    private getAvailability;
    issue(body: CreateReservationDto): Promise<Reservation | string>;
    reIssueBook(id: string): Promise<Reservation | string>;
    returnBook(body: ReturnBookDto, id: string): Promise<Reservation | string>;
    overdue(id: string): Promise<number>;
    findAll(): Promise<Reservation[]>;
    findAllByBook(bookid: string): Promise<{
        quantity: number;
        availability: number;
        reservations: Reservation[];
    }>;
    findAllByPatron(patronid: string): Promise<Reservation[]>;
    findHistoryByBook(bookid: string): Promise<Reservation[]>;
    findHistoryByPatron(patronid: string): Promise<Reservation[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Reservation> & Reservation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    status(bookId: any): Promise<number>;
}
