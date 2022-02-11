export interface Requirement {
  support(number: number): boolean;

  execute(): string;
}
