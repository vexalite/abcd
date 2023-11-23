import { Model } from 'mongoose';
import { InstituteSetting } from './schema';
import { BaseRepository } from 'src/repository';
export declare class InstituteSettingRepository extends BaseRepository<InstituteSetting> {
    private readonly instituteSettingModel;
    constructor(instituteSettingModel: Model<InstituteSetting>);
}
