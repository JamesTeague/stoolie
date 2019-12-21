import { Logger as WinstonLogger } from 'winston';

type LoggerFields = {
  [key: string]: any,
};

enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
}

interface ILogger {
  withFields(fields: LoggerFields): ILogger;
  withField(key: string, value: any): ILogger;
  withCategory(category: string): ILogger;
  withType(type: string): ILogger;
  withError(error: Error): ILogger;

  silly(message: string): ILogger;
  debug(message: string): ILogger;
  verbose(message: string): ILogger;
  info(message: string): ILogger;
  warn(message: string): ILogger;
  error(message: string): ILogger;
}

abstract class Logger implements ILogger {
  protected constructor(protected readonly logger: WinstonLogger, public fields: LoggerFields) {}

  abstract withFields(fields: LoggerFields): Logger;
  abstract withField(key: string, value: any): Logger;
  abstract withCategory(category: string): Logger;
  abstract withType(type: string): Logger;
  abstract withError(error: Error): Logger;

  abstract silly(message: string): Logger;
  abstract debug(message: string): Logger;
  abstract verbose(message: string): Logger;
  abstract info(message: string): Logger;
  abstract warn(message: string): Logger;
  abstract error(message: string): Logger;
}

export { ILogger, LogLevel, LoggerFields };

export default Logger;
