import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestService } from "src/request.service";
export declare class AuthenticationMiddleware implements NestMiddleware {
    private readonly requestService;
    private readonly logger;
    constructor(requestService: RequestService);
    use(req: Request, res: Response, next: NextFunction): void;
}
