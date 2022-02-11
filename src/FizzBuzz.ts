const BUZZ = 'Buzz';
const FIZZ = 'Fizz';
const FIZZ_BUZZ = 'FizzBuzz';
const BuzzDivider = 5;
const FizzDivider = 3;

// Red - Green - Refactoring
export function fizzBuzz(number: number) {
  if (number % FizzDivider === 0 && number % BuzzDivider === 0)
    return FIZZ_BUZZ;
  if (number === BuzzDivider) return BUZZ;
  if (number % FizzDivider === 0) return FIZZ;

  return number;
}
