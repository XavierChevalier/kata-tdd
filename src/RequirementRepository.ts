import { requirements } from './config/Requirements';

export function findRequirement(number: number) {
  return requirements.find((requirement) => requirement.support(number));
}
