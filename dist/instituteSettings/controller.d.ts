import { InstituteService } from './service';
import { UpdateInstituteDto } from './dto/update-institute.dto';
export declare class InstituteController {
    private readonly instituteService;
    constructor(instituteService: InstituteService);
    create(body: any): Promise<import("./schema").InstituteSetting>;
    findInstituteSetting(): Promise<import("./schema").InstituteSetting | import("./schema").InstituteSetting[]>;
    findOne(id: string): Promise<import("./schema").InstituteSetting>;
    update(id: string, updateInstituteDto: UpdateInstituteDto): Promise<import("./schema").InstituteSetting>;
}
