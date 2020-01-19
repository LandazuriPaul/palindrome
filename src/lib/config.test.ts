import { Config } from './config';

describe('Config service', () => {
  test('It should always be a singleton', () => {
    const firstConfig = new Config();
    const secondConfig = new Config();
    expect(firstConfig).toStrictEqual(secondConfig);
  });
});
