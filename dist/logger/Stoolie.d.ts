import { Logger as WinstonLogger } from 'winston';
import Logger, { LoggerFields } from './Logger';
export default class Stoolie extends Logger {
    constructor(logger: WinstonLogger, fields: LoggerFields);
    withFields(fields: LoggerFields): Stoolie;
    withField(key: string, value: any): Stoolie;
    withError(err: Error): Stoolie;
    withCategory(category: string): Stoolie;
    withType(type: string): Stoolie;
    silly(message: string): Stoolie;
    debug(message: string): Stoolie;
    verbose(message: string): Stoolie;
    info(message: string): Stoolie;
    warn(message: string): Stoolie;
    error(message: string): Stoolie;
    private log;
}
