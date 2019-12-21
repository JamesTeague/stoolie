import stoolie from './index';
import { LogLevel } from './logger/Logger';
import Stoolie from './logger/Stoolie';
import * as winston from 'winston';

describe('Stoolie Library', () => {

  it('returns a Stoolie Object', () => {
    const logger = stoolie(LogLevel.DEBUG, {});

    expect(logger).toBeInstanceOf(Stoolie);
  });

  it('uses a winston logger', () => {
    jest.spyOn(winston, 'createLogger');

    const logger = stoolie();

    logger.withFields({ type: 'type' });
    logger.info('trying it out.');

    // expect(winston.createLogger).toHaveBeenCalledWith({ level: 'debug' });
  })
});
