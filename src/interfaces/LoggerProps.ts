export interface ErrorLogContext {
  requestId: string;
  channel: string;
  message: string;
  description: string;
  context: {
    accountability: string;
    category: string;
    method: string;
    exception: Error;
    errorMessage: string;
    type?: string;
  };
  details?: Record<string, unknown>;
}

export interface LogContext {
  requestId: string;
  channel: string;
  message: string;
  description: string;
  context: {
    category: string;
    method: string;
    type?: string;
  };
  details?: {
    request: {
      url: string;
      header: any;
      body: any;
      method: string;
    };
    response: {
      body: any;
      statuscode: number;
    };
  };
}