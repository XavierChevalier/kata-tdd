// Red - Green - Refactoring
export function fizzBuzz(number: number) {
  if (number === 5) {
    return 'Buzz';
  }

  if (number === 3) {
    return 'Fizz';
  }

  return number;
}
