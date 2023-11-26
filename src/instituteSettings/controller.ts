import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { InstituteService } from './service';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';

@Controller('institute')
export class InstituteController {
  constructor(private readonly instituteService: InstituteService) {}

  @Post()
  create(@Body() body) {
    return this.instituteService.create(body);
  }

  @Get()
  findInstituteSetting() {
    return this.instituteService.findInstituteSetting();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituteService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstituteDto: UpdateInstituteDto,
  ) {
    return this.instituteService.update(id, updateInstituteDto);
  }
}
