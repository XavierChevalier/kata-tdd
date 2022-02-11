export function isDivisibleBy(number: number, divider: number) {
  return number % divider === 0;
}

export function isDivisibleByFive(number: number) {
  return isDivisibleBy(number, 5);
}

export function isDivisibleByThree(number: number) {
  return isDivisibleBy(number, 3);
}
