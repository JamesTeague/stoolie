import Stoolie from './Stoolie';
import * as winston from 'winston';

let internalLogger;

describe('Stoolie', function () {

  beforeAll(() => {
    internalLogger = winston.createLogger({
      transports: [new winston.transports.Console({
        format: winston.format.simple()
      })]
    });
  });

  it('creates a Stoolie logger', () => {
    const logger = new Stoolie(internalLogger, {});

    expect(logger).toBeInstanceOf(Stoolie);
  });

  it('contains fields it\s given', () => {
    const logger = new Stoolie(internalLogger, { type: 'test' });
    const loggerWithOneExtraField = logger.withField('category', 'test');
    const loggerWithTwoExtraFields = logger.withFields({
      category: 'test',
      id: 'test'
    });

    expect(logger.fields).toStrictEqual({ type: 'test' });
    expect(loggerWithOneExtraField.fields).toStrictEqual({
      type: 'test',
      category: 'test'
    });
    expect(loggerWithTwoExtraFields.fields).toStrictEqual({
      type: 'test',
      category: 'test',
      id: 'test'
    });
  });

  it('preserves a category', () => {
    let logger = new Stoolie(internalLogger, {});

    logger = logger.withCategory('test');

    expect(logger.fields).toStrictEqual({ category: 'test' })
  });

  it('preserves a type', () => {
    let logger = new Stoolie(internalLogger, {});

    logger = logger.withType('test');

    expect(logger.fields).toStrictEqual({ type: 'test' });
  });

  it('captures errors passed to it', () => {
    let logger = new Stoolie(internalLogger, {});

    logger = logger.withError(new Error('test'));

    expect(logger.fields.error.stack).toBeDefined();
  });

  it('should call log method', () => {
    let logger = new Stoolie(internalLogger, {});
    jest.spyOn(internalLogger, 'log');

    logger.silly('test');
    logger.debug('test');
    logger.verbose('test');
    logger.info('test');
    logger.warn('test');
    logger.error('test');

    expect(internalLogger.log).toBeCalledTimes(6);
  });
});
