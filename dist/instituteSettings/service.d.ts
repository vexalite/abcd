import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InstituteSetting } from './schema';
import { InstituteSettingRepository } from './repository';
export declare class InstituteService {
    private readonly instituteSettingRepository;
    constructor(instituteSettingRepository: InstituteSettingRepository);
    create(createInstituteDto: CreateInstituteDto): Promise<InstituteSetting>;
    findAll(): Promise<InstituteSetting[]>;
    findOne(id: string): Promise<InstituteSetting>;
    update(id: string, updateInstituteDto: UpdateInstituteDto): Promise<InstituteSetting>;
    remove(id: string): Promise<InstituteSetting>;
}
