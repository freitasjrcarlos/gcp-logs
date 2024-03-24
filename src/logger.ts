import { LoggerService, Injectable, Logger } from '@nestjs/common';
import { ErrorLogContext, LogContext } from './interfaces/LoggerProps';

@Injectable()
export class CustomLogger implements LoggerService {
  private logger = new Logger();


  log(content: LogContext) {
    this.logger.log(content);
  }

  error(content: ErrorLogContext) {
    this.logger.error(content);
  }

  warn(content: LogContext) {
    this.logger.warn(content);
  }
}
