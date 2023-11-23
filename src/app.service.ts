import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/auth';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)
  constructor(private readonly requestService: RequestService){}
  getHello(): string {
    const instituteId = this.requestService.getInstituteID()
    this.logger.log(`getHello instituteId: ${instituteId}`)
    return 'Hello World!';
  }
}
