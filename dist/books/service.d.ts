import { Book } from './schema';
import { BookDto } from './dto/create-book.dto';
import { UpdateCatalogDto } from './dto/update-book.dto';
import { BooksRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
export declare class BooksService {
    private readonly booksRepository;
    private readonly bookInstitutesRepository;
    constructor(booksRepository: BooksRepository, bookInstitutesRepository: BookInstitutesRepository);
    create(instituteid: string, isbn: string, body: BookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    update(id: string, updateCatalogDto: UpdateCatalogDto): Promise<Book | null>;
}
