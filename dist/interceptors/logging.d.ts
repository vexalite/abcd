import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { RequestService } from "src/request.service";
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly requestService;
    private readonly logger;
    constructor(requestService: RequestService);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
}
