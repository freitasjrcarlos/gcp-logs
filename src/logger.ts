import { LoggerService, Injectable, Logger } from '@nestjs/common';
import { ErrorLogContext } from './interfaces/LoggerProps';

export interface LogContext {
  requestId: string;
  channel: string;
  message: string;
  description?: string;
  context: {
    accountability: string;
    category: string;
    method: string;
    exception?: Error;
    dataApi?: any;
  };
}

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
