import { Requirement } from './Requirement';
import { isDivisibleByFive } from './DivisibleBy';

export class BuzzRequirement implements Requirement {
  support(number: number): boolean {
    return isDivisibleByFive(number);
  }

  execute(): string {
    return 'Buzz';
  }
}
