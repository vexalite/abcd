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
export declare class InstituteSettings extends Document {
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
    updatedAt?: Date;
}
export declare const InstituteSettingsSchema: mongoose.Schema<InstituteSettings, mongoose.Model<InstituteSettings, any, any, any, mongoose.Document<unknown, any, InstituteSettings> & InstituteSettings & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, InstituteSettings, mongoose.Document<unknown, {}, mongoose.FlatRecord<InstituteSettings>> & mongoose.FlatRecord<InstituteSettings> & {
    _id: mongoose.Types.ObjectId;
}>;
