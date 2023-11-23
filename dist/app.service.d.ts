import { RequestService } from './request.service';
export declare class AppService {
    private readonly requestService;
    private readonly logger;
    constructor(requestService: RequestService);
    getHello(): string;
}
