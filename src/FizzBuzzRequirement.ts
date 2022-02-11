import { Requirement } from './Requirement';
import { isDivisibleByFive, isDivisibleByThree } from './DivisibleBy';

export class FizzBuzzRequirement implements Requirement {
  support(number: number): boolean {
    return isDivisibleByThree(number) && isDivisibleByFive(number);
  }

  execute(): string {
    return 'FizzBuzz';
  }
}
