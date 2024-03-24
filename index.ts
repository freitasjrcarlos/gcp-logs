import { CustomLogger } from './src/logger';

const logger = new CustomLogger();

export function info(message: string): void {
  logger.log(`[INFO]: ${message}`);
}

export function error(message: string): void {
  logger.error(`[ERROR]: ${message}`, '');
}

export { configureLogger } from './src/configureLogger';

export { LoggingModule } from './src/logging.module';