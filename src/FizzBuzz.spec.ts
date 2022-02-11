import { fizzBuzz } from './FizzBuzz';

describe('FizzBuzz', () => {
  it('should returns 1 with 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should returns 2 with 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  it('should returns 3 with 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});