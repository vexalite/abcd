import { Injectable } from '@nestjs/common';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InstituteSetting } from './schema';
import { InstituteSettingRepository } from './repository';
import { RequestService } from 'src/request.service';

@Injectable()
export class InstituteService {
  private instituteId: string;
  constructor(
    private readonly requestService: RequestService,
    private readonly instituteSettingRepository: InstituteSettingRepository,
  ) {this.instituteId = this.requestService.getInstituteID()}

  async create(
    createInstituteDto,
  ) {
    const createdInstitute =
      await this.instituteSettingRepository.create(createInstituteDto);
    return createdInstitute;
  }

  async findInstituteSetting(): Promise<InstituteSetting[]> {
    const allInstitutes = await this.instituteSettingRepository.findAllByInstitute(this.instituteId);
    return allInstitutes;
  }

  async findOne(id: string): Promise<InstituteSetting> {
    const institute = await this.instituteSettingRepository.findById(id);
    return institute;
  }

  async update(
    id: string,
    updateInstituteDto: UpdateInstituteDto,
  ): Promise<InstituteSetting> {
    const updatedInstitute = await this.instituteSettingRepository.update(
      id,
      updateInstituteDto,
    );
    return updatedInstitute;
  }

  async remove(id: string): Promise<InstituteSetting> {
    const removedInstitute = await this.instituteSettingRepository.remove(id);
    return removedInstitute;
  }
}
