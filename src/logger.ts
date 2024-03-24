import { LoggerService, Injectable, Logger } from '@nestjs/common';

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


  log(message: string) {
    this.logger.log(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(context: LogContext) {
    const logMessage = {
      ...context,
      context: {
        ...context.context,
      },
    };
    this.logger.warn(logMessage);
  }
}
