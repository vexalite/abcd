import { ConsoleLogger, LoggerService } from '@nestjs/common';
export declare class CustomLogger extends ConsoleLogger implements LoggerService {
    log(message: string): void;
    private shouldDisableLog;
}
