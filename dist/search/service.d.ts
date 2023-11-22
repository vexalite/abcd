import { SearchRepository } from './repository';
import mongoose from 'mongoose';
import { BooksRepository } from 'src/books/repository';
export declare class SearchService {
    private readonly booksRepository;
    private readonly searchRepository;
    constructor(booksRepository: BooksRepository, searchRepository: SearchRepository);
    universalSearch(instituteid: string, searchQuery: string): Promise<Omit<mongoose.Document<unknown, {}, import("../book-institute-relation/schema").BookInstitute> & import("../book-institute-relation/schema").BookInstitute & {
        _id: mongoose.Types.ObjectId;
    }, never>[]>;
}
