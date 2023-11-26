import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { CustomLogger } from './overrideLog';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger: ['error', 'warn', 'debug', 'verbose'],
    }
    // , { logger: new CustomLogger() }
    );
  const logger = new Logger();
  await app.listen(process.env.PORT || 3000, "0.0.0.0");
}
bootstrap();
