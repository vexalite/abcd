import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class Authguard implements CanActivate {
    private readonly logger = new Logger(Authguard.name)


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log(Authguard.name)
        const request = context.switchToHttp().getRequest()
        // Authenticate the JWT
        return true
    }
}
