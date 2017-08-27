import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  const pipe = new TimePipe();
  it('should return minutes and seconds string', () => {
    const result = pipe.transform(126);

    expect(result).toBe('2:06');
  });

  it('should return minutes and 00 for seconds', () => {
    const result = pipe.transform(60);

    expect(result).toBe('1:00');
  });

  it('should show hours field when over 60 minutes', () => {
    const result = pipe.transform(60 * 60 + 10);

    expect(result).toBe('1:00:10');
  });
});
