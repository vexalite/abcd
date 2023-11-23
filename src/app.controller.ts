import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Authguard } from './guards/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(Authguard)
  getHello(): string {
    return this.appService.getHello();
  }
}
