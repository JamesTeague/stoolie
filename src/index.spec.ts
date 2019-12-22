import stoolie from './index';
import Stoolie from './logger/Stoolie';

describe('Stoolie Library', () => {
  it('returns a Stoolie Object', () => {
    const logger = stoolie('index.spec.test');

    expect(logger).toBeInstanceOf(Stoolie);
    expect(logger.fields).toStrictEqual({ app: 'index.spec.test' });
  });
});
