import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { RequestService } from "src/request.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name)

    constructor(private readonly requestService: RequestService) {}

     intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest()
        const userAgent = request.get('user-agent') || ''
        const {ip, method, path: url} = request

        this.logger.verbose(`
        ${method} ${url} ${userAgent} ${ip}: ${context.getClass().name} ${context.getHandler().name} invoked...`)

        this.logger.debug('instituteId:', this.requestService.getInstituteID())

        const now = Date.now()
        return next.handle().pipe(
            tap((res) => {
                const response = context.switchToHttp().getResponse()
                const { statusCode } = response
                const contentLength = response.get('content-length')

                this.logger.verbose(`
                ${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}: ${Date.now()- now}ms`)

                // this.logger.debug('Response:', res)
            })
        )
    }
}