import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class exceptionFilter implements ExceptionFilter{
    private readonly logger = new Logger(exceptionFilter.name)

 catch(exception: any, host: ArgumentsHost) {
    this.logger.log(exceptionFilter.name)
     const ctx = host.switchToHttp()

     const response = ctx.getResponse<Response>()
     const request = ctx.getRequest<Request>()
     const status = exception.getStatus()

     response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url
     })
 }
}