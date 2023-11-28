import { ConsoleLogger, LoggerService } from '@nestjs/common';

export class CustomLogger extends ConsoleLogger implements LoggerService {
  log(message: string) {
    if (!this.shouldDisableLog(message)) {
      super.log(message);
    }
  }

  private shouldDisableLog(message: string): boolean {
    // Define the log messages or patterns that you want to disable
    const messagesToDisable = [
      'Starting Nest application',
      'MongooseModule dependencies initialized',
      'Mapped',
      'Nest application successfully started',
    ];

    // Check if the log message contains any of the specified messages
    return messagesToDisable.some((pattern) => message.includes(pattern));
  }
}
