import { findRequirement } from './RequirementRepository';

export const fizzBuzz = (number: number) =>
  findRequirement(number)?.execute() || number;
