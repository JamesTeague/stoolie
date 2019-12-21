import { Logger as WinstonLogger } from 'winston';
import Logger, { LoggerFields, LogLevel } from './Logger';

export default class Stoolie extends Logger {

  constructor(logger: WinstonLogger, fields: LoggerFields) {
    super(logger, fields);
  }

  private _log(level: LogLevel, message: string): Stoolie {
    this.logger.log({
      ...this.fields,
      level: level.toString(),
      message,
    });

    return this;
  }

  withFields(fields: LoggerFields): Stoolie {
    return new Stoolie(this.logger, { ...this.fields, ...fields });
  }

  withField(key: string, value: any): Stoolie {
    const fieldObject = {};
    fieldObject[key] = value;
    return this.withFields(fieldObject);
  }

  withError(err: Error): Stoolie {
    const error = Object.getOwnPropertyNames(err)
      .reduce((acc, key) => {
        acc[key] = err[key];

        return acc;
      }, {});

    return this.withFields({ error });
  }

  withCategory(category: string): Stoolie {
    return this.withFields({ category });
  }

  withType(type: string): Stoolie {
    return this.withFields({ type });
  }

  silly(message: string): Stoolie {
    return this._log(LogLevel.SILLY, message);
  }

  debug(message: string): Stoolie {
    return this._log(LogLevel.DEBUG, message);
  }

  verbose(message: string): Stoolie {
    return this._log(LogLevel.VERBOSE, message);
  }

  info(message: string): Stoolie {
    return this._log(LogLevel.INFO, message);
  }

  warn(message: string): Stoolie {
    return this._log(LogLevel.WARN, message);
  }

  error(message: string): Stoolie {
    return this._log(LogLevel.ERROR, message);
  }
}
