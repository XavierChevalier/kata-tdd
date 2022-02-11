import { fizzBuzz } from './FizzBuzz';

describe('FizzBuzz', () => {
  it.each`
    actual | expected
    ${1}   | ${1}
    ${2}   | ${2}
    ${3}   | ${'Fizz'}
    ${4}   | ${4}
    ${5}   | ${'Buzz'}
    ${6}   | ${'Fizz'}
    ${7}   | ${7}
    ${9}   | ${'Fizz'}
    ${10}  | ${'Buzz'}
    ${15}  | ${'FizzBuzz'}
    ${30}  | ${'FizzBuzz'}
  `(
    'should returns $expected with $actual',
    ({ actual, expected }: { actual: number; expected: number | string }) => {
      expect(fizzBuzz(actual)).toBe(expected);
    },
  );
});
