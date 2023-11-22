import { Model } from 'mongoose';
import { BookInstitute } from './schema';
import { BaseRepository } from 'src/base.repository';
export declare class BookInstitutesRepository extends BaseRepository<BookInstitute> {
    private readonly bookInstituteModel;
    constructor(bookInstituteModel: Model<BookInstitute>);
}
