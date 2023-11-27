import { Types } from 'mongoose';
export declare class CreateReservationDto {
    patronType: 'student' | 'employee';
    patronId: string;
    bookId: Types.ObjectId | string;
    status: 'issued' | 'returned';
    issuedDate: Date;
    renewDate?: Date;
    dueDate: Date;
    overdueChargesPaid?: number;
    pendingCharges?: number;
    returnedDate?: Date;
    createdAt: Date;
}
export declare class ReturnBookDto {
    patronType: 'student' | 'employee';
    patronId: string;
    bookId: Types.ObjectId | string;
    status: 'issued' | 'returned';
    issuedDate: Date;
    renewDate?: Date;
    dueDate: Date;
    overdueChargesPaid: number;
    pendingCharges?: number;
    returnedDate?: Date;
    createdAt: Date;
}
