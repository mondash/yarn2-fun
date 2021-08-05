import { add, multiply } from "@mondash/math";

export function doMath(): number {
  return multiply(add(1, 2), add(3, 4));
}

const env = process.env;
