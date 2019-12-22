import { createLogger, LoggerOptions, transports } from 'winston';
import { getDevFormat, getProdFormat } from './format';
import { DryStoolie, ILogger, LogLevel, Stoolie } from './logger';
import { isProduction } from './utilities';

const createWinstonLogger = (options?: LoggerOptions) => createLogger(options);

const stoolie = (
  app: string,
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

  return new Stoolie(logger, { app });
};

export default stoolie;
const NullLog = new DryStoolie();
export { ILogger, LogLevel, NullLog };
