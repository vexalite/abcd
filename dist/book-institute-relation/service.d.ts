import { BookInstitutesRepository } from './repository';
import { BookInstitute } from './schema';
export declare class BookInstitutesService {
    private readonly bookInstitutesRepository;
    constructor(bookInstitutesRepository: BookInstitutesRepository);
    createBookInstitute(instituteid: string, bookInstitute: BookInstitute): Promise<BookInstitute>;
    getBookInstitutes(instituteid: string): Promise<BookInstitute[]>;
    getBookInstituteById(id: string): Promise<BookInstitute>;
    updateBookInstitute(id: string, bookInstitute: Partial<BookInstitute>): Promise<BookInstitute>;
}
