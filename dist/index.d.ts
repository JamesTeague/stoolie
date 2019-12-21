import { LoggerOptions } from 'winston';
import { DryStoolie, LogLevel, Stoolie } from './logger';
declare const stoolie: (level?: LogLevel, loggerOptions?: LoggerOptions | undefined) => Stoolie;
export default stoolie;
declare const NullLog: DryStoolie;
export { LogLevel, NullLog };
