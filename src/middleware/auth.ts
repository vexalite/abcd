import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestService } from "src/request.service";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware{
    private readonly logger = new Logger(AuthenticationMiddleware.name)
    constructor(private readonly requestService: RequestService) {}
    use(req: Request, res: Response, next: NextFunction){
        this.logger.log(AuthenticationMiddleware.name)
//Auth
const instituteId = '123'
this.requestService.setInstituteId(instituteId)

next()
    }
}