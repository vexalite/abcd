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
import { Model, Document, FilterQuery } from 'mongoose';
export declare class BaseRepository<T extends Document> {
    private readonly model;
    constructor(model: Model<T>);
    create(item: Partial<T>): Promise<T>;
    findById(id: string): Promise<T>;
    findByIdAndPopulate(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    findAllByInstitute(id: string): Promise<import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>[]>;
    findReservationByBook(id: string, bookid: string, status: string): Promise<T[]>;
    findReservationByPatron(id: string, patronid: string, status: string): Promise<T[]>;
    findAllBooks(id: string): Promise<T[]>;
    update(id: string, item: Partial<T>): Promise<T>;
    delete(id: string): Promise<T>;
    remove(id: string): Promise<T>;
    findOne(filter: FilterQuery<T>): Promise<T>;
    findOneReservation(filter: any): Promise<import("mongoose").UnpackedIntersection<import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}>>;
    findMultiple(filter: FilterQuery<T>): Promise<T[]>;
    findBookByISBN(isbn: string): Promise<T>;
}
