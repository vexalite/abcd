// import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
// import { Observable } from "rxjs";

// @Injectable()
// export class Authguard implements CanActivate {
//     private readonly logger = new Logger(Authguard.name)


//     canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//         this.logger.log(Authguard.name)
//         const request = context.switchToHttp().getRequest()
//         // check the JWT
//         const jwtToken = request.headers['authorization'];

//         if (!jwtToken) {
//             this.logger.error('JWT Token not present in the request header');
//             return false;
//         }

        
//         return true
//     }
// }


import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';
import { RequestService } from "src/request.service";

@Injectable()
export class Authguard implements CanActivate {
    private readonly logger = new Logger(Authguard.name);

    // constructor(private readonly requestService: RequestService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        this.logger.log(Authguard.name);

        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers['authorization'];

        if (!authorizationHeader) {
            this.logger.error('Authorization header not present in the request');
            return false;
        }else{
            return true
        }

        // const [bearer, jwtToken] = authorizationHeader.split(' ');

        // if (bearer.toLowerCase() !== 'bearer' || !jwtToken) {
        //     this.logger.error('Invalid or missing Bearer token in the authorization header');
        //     return false;
        // }

        // try {
        //     const decodedToken: any = jwt.verify(jwtToken, 'your-secret-key');
        //     // this.logger.log(`decoded token ---- ${JSON.stringify(decodedToken)}`);

        //     if (decodedToken && decodedToken.instituteId) {
        //         const instituteId = decodedToken.instituteId;

        //         this.logger.log(`Authenticated with instituteId: ${instituteId}`);

        //         // this is not working in the guard while it works fine in middleware
        //         // this.requestService.setInstituteId(instituteId);

        //         return true;
        //     } else {
        //         this.logger.error('JWT does not contain instituteId');
        //         return false;
        //     }
        // } catch (error) {
        //     this.logger.error('Error decoding JWT:', error.message);
        //     return false;
        // }
    }
}
