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
export interface BookInstitute extends Document {
    bookInfo: string;
    instituteId: string;
    quantity: number;
    isAvailableForIssue?: boolean;
    barcode?: string;
    individualBookId: string;
}
export declare class BookInstitutes extends Document {
    id: string;
    bookInfo: string;
    instituteId: string;
    quantity: number;
    isAvailableForIssue: boolean;
    barcode: string;
    individualBookId: string;
}
declare const BookInstituteSchema: import("mongoose").Schema<BookInstitutes, import("mongoose").Model<BookInstitutes, any, any, any, Document<unknown, any, BookInstitutes> & BookInstitutes & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BookInstitutes, Document<unknown, {}, import("mongoose").FlatRecord<BookInstitutes>> & import("mongoose").FlatRecord<BookInstitutes> & {
    _id: Types.ObjectId;
}>;
export { BookInstituteSchema };
