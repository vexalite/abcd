import { SearchRepository } from './repository';
import mongoose from 'mongoose';
import { BooksRepository } from 'src/books/repository';
import { RequestService } from 'src/request.service';
export declare class SearchService {
    private readonly requestService;
    private readonly booksRepository;
    private readonly searchRepository;
    private instituteId;
    constructor(requestService: RequestService, booksRepository: BooksRepository, searchRepository: SearchRepository);
    universalSearch(searchQuery: string): Promise<Omit<mongoose.Document<unknown, {}, import("../book-institute-relation/schema").BookInstitute> & import("../book-institute-relation/schema").BookInstitute & {
        _id: mongoose.Types.ObjectId;
    }, never>[]>;
}
