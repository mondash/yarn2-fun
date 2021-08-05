export function add(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

export function multiply(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc * val, 1);
}
