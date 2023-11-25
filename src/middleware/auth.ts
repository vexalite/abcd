import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestService } from "src/request.service";
import * as jwt from 'jsonwebtoken'; 

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    private readonly logger = new Logger(AuthenticationMiddleware.name);

    constructor(private readonly requestService: RequestService) {}

    use(req: Request, res: Response, next: NextFunction) {
        this.logger.debug(AuthenticationMiddleware.name);

        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            this.logger.error('Authorization header not present in the request');
        }

        const [bearer, jwtToken] = authorizationHeader.split(' ');

        if (bearer.toLowerCase() !== 'bearer' || !jwtToken) {
            this.logger.error('Invalid or missing Bearer token in the authorization header');
            return next();
        }
        if (!jwtToken) {
            this.logger.error('JWT Token not present in the request header');
            return next();
        }

        try {
            this.logger.debug(jwtToken)
            const decodedToken = jwt.verify(jwtToken, 'your-secret-key'); 
            // this.logger.log(`decoded token ---- ${JSON.stringify(decodedToken)}`)

            if (decodedToken && decodedToken.instituteId) {
                const instituteId = decodedToken.instituteId;

                this.requestService.setInstituteId(instituteId);

                this.logger.verbose(`Authenticated with instituteId: ${instituteId}`);
            } else {
                this.logger.error('JWT does not contain instituteId');
            }
        } catch (error) {
            this.logger.error('Error decoding JWT:', error.message);
        }

        next();
    }
}
