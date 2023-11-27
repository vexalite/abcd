import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book, BookSchema } from 'src/books/schema';

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
  pendingCharges?: number
}

export type ReservationDocument = Reservation & Document;

@Schema()
export class Reservations {
  @Prop({ type: String, enum: ['student', 'employee'], required: true })
  patronType!: string;

  @Prop({ required: true })
  patronId!: string;

  @Prop({ type: Types.ObjectId, ref: 'Book', required: true })
  bookId!: Types.ObjectId | string | Book;

  @Prop({ required: true })
  instituteId!: string;

  @Prop({ type: String, enum: ['issued', 'returned'], required: true })
  status!: string;

  @Prop({ required: false })
  issuedBy!: string;

  @Prop({ type: Date, required: true, default: Date.now })
  issuedDate!: Date;

  @Prop({ type: Date, required: false })
  renewDate?: Date;

  @Prop({
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })
  dueDate!: Date;

  @Prop({ type: Number})
  pendingCharges?: number

  @Prop({ type: Number })
  overdueChargesPaid?: number;

  @Prop({ type: Number })
  overdueCharges?: number;

  @Prop({ type: Date, required: false })
  returnedDate?: Date;

  @Prop({ type: Date, required: true, default: Date.now })
  createdAt!: Date;
}

export const ReservationsSchema = SchemaFactory.createForClass(Reservations);
