import { createLogger, LoggerOptions, transports } from 'winston';
import { getDevFormat, getProdFormat } from './format';
import { DryStoolie, LogLevel, Stoolie } from './logger';
import { isProduction } from './utilities';

const createWinstonLogger = (options?: LoggerOptions) => createLogger(options);

const stoolie = (
  level: LogLevel = LogLevel.INFO,
  loggerOptions?: LoggerOptions
) => {
  let format = getDevFormat();

  if (isProduction(process.env)) {
    format = getProdFormat();
  }
  const options = loggerOptions
    ? loggerOptions
    : {
        transports: [new transports.Console({ format })],
      };

  const logger = createWinstonLogger({
    level,
    ...options,
  });

  return new Stoolie(logger, {});
};

export default stoolie;
export const NullLog = new DryStoolie();
