import { Controller, Get, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Authguard } from './guards/auth';
import { RequestService } from './request.service';


@Controller()
export class AppController {
  private readonly logger = new Logger(AppService.name)

  constructor(private readonly requestService: RequestService,
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const instituteId = this.requestService.getInstituteID()
    console.log(this.requestService.getInstituteID())

    return this.appService.getHello();

  }

  // @Post(':instituteid')
  // generateToken(@Param('instituteid') instituteid: string): string {
  //   const instituteId = instituteid;
  //   const token = this.appService.generateToken(instituteId);
  //   return token;
  // }
}
