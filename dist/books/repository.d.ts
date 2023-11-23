import { Model } from 'mongoose';
import { Book } from './schema';
import { BaseRepository } from 'src/repository';
import { BookInstitute } from 'src/book-institute-relation/schema';
export declare class BooksRepository extends BaseRepository<Book> {
    private readonly bookModel;
    private readonly bookInstituteModel;
    constructor(bookModel: Model<Book>, bookInstituteModel: Model<BookInstitute>);
}
