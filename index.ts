import { CustomLogger } from './src/logger';
import { initLogger } from './src/configureLogger';
import { LoggingModule } from './src/logging.module';

const logger = new CustomLogger();

export { logger, initLogger, LoggingModule };