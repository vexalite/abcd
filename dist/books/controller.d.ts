import { BooksService } from './service';
import { BookDto } from './dto/create-book.dto';
import { Book } from './schema';
import { UpdateCatalogDto } from './dto/update-book.dto';
import { BookInstitute } from 'src/book-institute-relation/schema';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    createBook(isbn: string, body: BookDto): Promise<Book>;
    getInstituteBooks(): Promise<BookInstitute[]>;
    getAllBooks(): Promise<Book[]>;
    getTotalBookQuantity(): Promise<{
        totalBooks: number;
        issuedBooks: number;
        availableBooks: number;
    }>;
    getBookById(id: string): Promise<Book | null>;
    updateBook(id: string, updateCatalogDto: UpdateCatalogDto): Promise<Book | null>;
}
