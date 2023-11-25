import { AppService } from './app.service';
import { RequestService } from './request.service';
export declare class AppController {
    private readonly requestService;
    private readonly appService;
    private readonly logger;
    constructor(requestService: RequestService, appService: AppService);
    getHello(): string;
}
