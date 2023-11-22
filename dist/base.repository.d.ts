import { Model, Document, FilterQuery } from 'mongoose';
export declare class BaseRepository<T extends Document> {
    private readonly model;
    constructor(model: Model<T>);
    create(item: Partial<T>): Promise<T>;
    findById(id: string): Promise<T>;
    findByIdAndPopulate(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    findAllReservation(id: string): Promise<T[]>;
    findAllBooks(id: string): Promise<T[]>;
    update(id: string, item: Partial<T>): Promise<T>;
    delete(id: string): Promise<T>;
    remove(id: string): Promise<T>;
    findOne(filter: FilterQuery<T>): Promise<T>;
    findMultiple(filter: FilterQuery<T>): Promise<T[]>;
    findBookByISBN(isbn: string): Promise<T>;
}
