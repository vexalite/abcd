import { Types } from 'mongoose';
export declare class CreateReservationDto {
    patronType: 'student' | 'employee';
    patronId: string;
    bookId: Types.ObjectId | string;
    instituteId: string;
    status: 'issued' | 'returned';
    issuedDate: Date;
    renewDate?: Date;
    dueDate: Date;
    overdueChargesPaid?: number;
    returnedDate?: Date;
    createdAt: Date;
}
