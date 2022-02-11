import { Requirement } from './Requirement';
import { isDivisibleByThree } from './DivisibleBy';

export class FizzRequirement implements Requirement {
  support(number: number): boolean {
    return isDivisibleByThree(number);
  }

  execute(): string {
    return 'Fizz';
  }
}
