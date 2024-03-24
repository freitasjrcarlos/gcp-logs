import { CustomLogger } from './src/logger';
import { configureLogger } from './src/configureLogger';
import { LoggingModule } from './src/logging.module';

const logger = new CustomLogger();

export { logger, configureLogger, LoggingModule };