import { createLogger, format, LoggerOptions, transports } from 'winston';
import tripleBeam from 'triple-beam';
import { LogLevel } from './logger/Logger';
import Stoolie from './logger/Stoolie';

const createWinstonLogger = (options?: LoggerOptions) => createLogger(options);

const getDevFormat = () => {
  const colorizer = format.colorize();

  return format.combine(
    format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    format.printf((info) => {
      const {
        app,
        category,
        message,
        timestamp,
        ...rest
      } = info;

      const level = info.level.substr(0,5).padEnd(5);

      const moniker = `${colorizer.colorize(info[tripleBeam.LEVEL], level)} ${timestamp.toString()} - [${app}${category ? ` (${category})` : ''}]`;
      const fields = Object
        .keys(rest)
        .reduce((acc, k) => `${acc}   ${colorizer.colorize(info[tripleBeam.LEVEL], k)}=${JSON.stringify(rest[k])}`, '');

      return `${`${moniker} ${message}`.padEnd(116)} ${fields}`
    }),
  )
};

const stoolie = (level: LogLevel = LogLevel.INFO, loggerOptions?: LoggerOptions) => {
  const options = loggerOptions ? loggerOptions : {
    transports: [
      new transports.Console({
        format: getDevFormat(),
      })
    ]
  };

  const logger = createWinstonLogger({
    level,
    ...options
  });

  return new Stoolie(logger, {})
};

export default stoolie;
