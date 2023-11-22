import { BooksService } from './service';
import { BookDto } from './dto/create-book.dto';
import { Book } from './schema';
import { UpdateCatalogDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    createBook(instituteid: string, isbn: string, body: BookDto): Promise<Book>;
    getAllBooks(): Promise<Book[]>;
    getBookById(id: string): Promise<Book | null>;
    updateBook(id: string, updateCatalogDto: UpdateCatalogDto): Promise<Book | null>;
}
