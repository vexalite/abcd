import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InstituteSetting } from './schema';
import { InstituteSettingRepository } from './repository';
import { RequestService } from 'src/request.service';
export declare class InstituteService {
    private readonly requestService;
    private readonly instituteSettingRepository;
    private instituteId;
    constructor(requestService: RequestService, instituteSettingRepository: InstituteSettingRepository);
    create(createInstituteDto: any): Promise<InstituteSetting>;
    findInstituteSetting(): Promise<InstituteSetting[]>;
    findOne(id: string): Promise<InstituteSetting>;
    update(id: string, updateInstituteDto: UpdateInstituteDto): Promise<InstituteSetting>;
    remove(id: string): Promise<InstituteSetting>;
}
