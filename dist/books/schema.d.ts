import mongoose, { Document } from 'mongoose';
interface Dimensions {
    height?: number;
    width?: number;
    thickness?: number;
}
interface ISBN {
    ISBN10?: string;
    ISBN13?: string;
}
export interface Book extends Document {
    title: string;
    author: string[];
    publisher: string[];
    publishedDate: Date;
    description: string;
    ISBN: ISBN;
    pageCount: number;
    dimensions?: Dimensions;
    mainCategory: string;
    categories?: string[];
    edition?: string;
    volume?: string;
    coverImageUrl?: string;
    language: string;
    shelfLocation?: string;
    tags?: string[];
    averageRating?: number;
    createdAt: Date;
    updatedAt?: Date | undefined;
    availability: number;
}
export declare class Books extends Document {
    title: string;
    author: string[];
    publisher: string[];
    publishedDate: Date;
    description: string;
    ISBN: {
        ISBN10?: string;
        ISBN13?: string;
    };
    pageCount: number;
    availability?: number;
    dimensions?: {
        height?: number;
        width?: number;
        thickness?: number;
    };
    mainCategory: string;
    categories?: string[];
    edition?: string;
    volume?: string;
    coverImageUrl?: string;
    language: string;
    shelfLocation?: string;
    tags?: string[];
    averageRating?: number;
    createdAt: Date;
    updatedAt?: Date;
}
declare const BookSchema: mongoose.Schema<Books, mongoose.Model<Books, any, any, any, mongoose.Document<unknown, any, Books> & Books & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Books, mongoose.Document<unknown, {}, mongoose.FlatRecord<Books>> & mongoose.FlatRecord<Books> & {
    _id: mongoose.Types.ObjectId;
}>;
export { BookSchema };
