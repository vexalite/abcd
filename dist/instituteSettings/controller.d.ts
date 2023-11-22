import { InstituteService } from './service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
export declare class InstituteController {
    private readonly instituteService;
    constructor(instituteService: InstituteService);
    create(body: CreateInstituteDto): Promise<import("./schema").InstituteSetting>;
    findAll(): Promise<import("./schema").InstituteSetting[]>;
    findOne(id: string): Promise<import("./schema").InstituteSetting>;
    update(id: string, updateInstituteDto: UpdateInstituteDto): Promise<import("./schema").InstituteSetting>;
}
