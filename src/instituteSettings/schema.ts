import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export interface InstituteSetting extends Document {
  instituteId: string;
  student: {
    borrowingPeriod: number;
    overdueCharges: number;
    borrowingCapacity: number;
  };
  employee: {
    borrowingPeriod: number;
    overdueCharges: number;
    borrowingCapacity: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
const defaultStudent = {
  borrowingPeriod: 7,
  overdueCharges: 2,
  borrowingCapacity: 5,
}
const defaultEmployee = {
  borrowingPeriod: 10,
  overdueCharges: 4,
  borrowingCapacity: 5,
}

@Schema()
export class InstituteSettings extends Document {
  @Prop({ required: true })
  instituteId!: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, required: true, default: defaultStudent })
  student!: {
    borrowingPeriod: number;
    overdueCharges: number;
    borrowingCapacity: number;
  };

  @Prop({ type: mongoose.Schema.Types.Mixed, required: true, default: defaultEmployee })
  employee!: {
    borrowingPeriod: number;
    overdueCharges: number;
    borrowingCapacity: number;
  };

  @Prop()
  createdAt!: Date;

  @Prop()
  updatedAt?: Date;
}

export const InstituteSettingsSchema =
  SchemaFactory.createForClass(InstituteSettings);
