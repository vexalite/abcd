import { BookInstitutesService } from './service';
import { BookInstitute } from './schema';
export declare class BookInstitutesController {
    private readonly bookInstitutesService;
    constructor(bookInstitutesService: BookInstitutesService);
    create(instituteid: string, bookInstitute: BookInstitute): Promise<BookInstitute>;
    findAll(instituteid: string): Promise<BookInstitute[]>;
    findOne(id: string): Promise<BookInstitute>;
    update(id: string, bookInstitute: Partial<BookInstitute>): Promise<BookInstitute>;
}
