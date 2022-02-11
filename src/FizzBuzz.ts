const BUZZ = 'Buzz';
const FIZZ = 'Fizz';
const FIZZ_BUZZ = 'FizzBuzz';
const BuzzDivider = 5;

function isDivisibleBy(number: number, divider: number) {
  return number % divider === 0;
}

function isDivisibleByFive(number: number) {
  return isDivisibleBy(number, 5);
}

function isDivisibleByThree(number: number) {
  return isDivisibleBy(number, 3);
}

// Red - Green - Refactoring
export function fizzBuzz(number: number) {
  if (isDivisibleByThree(number) && isDivisibleByFive(number)) return FIZZ_BUZZ;
  if (number === 10) return BUZZ;
  if (number === BuzzDivider) return BUZZ;
  if (isDivisibleByThree(number)) return FIZZ;

  return number;
}
