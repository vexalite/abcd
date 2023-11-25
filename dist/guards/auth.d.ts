import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class Authguard implements CanActivate {
    private readonly logger;
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
