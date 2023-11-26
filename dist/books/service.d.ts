import { Book } from './schema';
import { BookDto } from './dto/create-book.dto';
import { UpdateCatalogDto } from './dto/update-book.dto';
import { BooksRepository } from './repository';
import { BookInstitutesRepository } from 'src/book-institute-relation/repository';
import { RequestService } from 'src/request.service';
import { BookInstitute } from 'src/book-institute-relation/schema';
import { InstituteSettingRepository } from 'src/instituteSettings/repository';
export declare class BooksService {
    private readonly requestService;
    private readonly booksRepository;
    private readonly instituteSettingRepository;
    private readonly bookInstitutesRepository;
    private instituteId;
    constructor(requestService: RequestService, booksRepository: BooksRepository, instituteSettingRepository: InstituteSettingRepository, bookInstitutesRepository: BookInstitutesRepository);
    create(isbn: string, body: BookDto): Promise<Book>;
    findInstituteBooks(): Promise<BookInstitute[]>;
    findAllBooks(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    update(id: string, updateCatalogDto: UpdateCatalogDto): Promise<Book | null>;
}
