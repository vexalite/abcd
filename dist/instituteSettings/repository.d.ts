import { Model } from 'mongoose';
import { InstituteSetting } from './schema';
import { BaseRepository } from 'src/base.repository';
export declare class InstituteSettingRepository extends BaseRepository<InstituteSetting> {
    private readonly instituteSettingModel;
    constructor(instituteSettingModel: Model<InstituteSetting>);
}
