import { fizzBuzz } from './FizzBuzz';

describe('FizzBuzz', () => {
  it('should returns 1 with 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('should returns 2 with 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  it('should returns "Fizz" with 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should returns 4 with 4', () => {
    expect(fizzBuzz(4)).toBe(4);
  });

  it('should returns "Buzz" with 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should returns "Fizz" with 6', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });
});
