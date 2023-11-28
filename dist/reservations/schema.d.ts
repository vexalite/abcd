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
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { Book } from 'src/books/schema';
export interface Reservation extends Document {
    patronType: 'student' | 'employee';
    patronId: string;
    bookId: Types.ObjectId | string | Book;
    instituteId: string;
    status: 'issued' | 'returned';
    issuedBy: string;
    issuedDate: Date;
    renewDate?: Date;
    dueDate: Date;
    overdueChargesPaid?: number;
    overdueCharges?: number;
    returnedDate?: Date;
    createdAt: Date;
    pendingCharges?: number;
    availability: number;
}
export type ReservationDocument = Reservation & Document;
export declare class Reservations {
    patronType: string;
    patronId: string;
    bookId: Types.ObjectId | string | Book;
    instituteId: string;
    status: string;
    issuedBy: string;
    issuedDate: Date;
    renewDate?: Date;
    dueDate: Date;
    pendingCharges?: number;
    overdueChargesPaid?: number;
    overdueCharges?: number;
    returnedDate?: Date;
    createdAt: Date;
}
export declare const ReservationsSchema: import("mongoose").Schema<Reservations, import("mongoose").Model<Reservations, any, any, any, Document<unknown, any, Reservations> & Reservations & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservations, Document<unknown, {}, import("mongoose").FlatRecord<Reservations>> & import("mongoose").FlatRecord<Reservations> & {
    _id: Types.ObjectId;
}>;
