import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class exceptionFilter implements ExceptionFilter{
    private readonly logger = new Logger(exceptionFilter.name)

 catch(exception: any, host: ArgumentsHost) {
    this.logger.log(exceptionFilter.name)
     const ctx = host.switchToHttp()

     const response = ctx.getResponse<Response>()
     const request = ctx.getRequest<Request>()
     const status = exception && typeof exception.getStatus === 'function' ? exception.getStatus() : 500;
     const message = exception.message || 'Internal Server Error';

     response.status(status).json({
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString(),
        path: request.url
     })
 }
}