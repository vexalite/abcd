import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export interface BookInstitute extends Document {
  bookId: string;
  instituteId: string;
  quantity: number;
}

@Schema()
export class BookInstitutes extends Document {

  @Prop({ required: true, type: Types.ObjectId, ref: 'Book' })
  bookId!: string;

  @Prop({ required: true })
  instituteId!: string;

  @Prop({ required: true })
  quantity!: number;
}

const BookInstituteSchema = SchemaFactory.createForClass(BookInstitutes);

export { BookInstituteSchema };
