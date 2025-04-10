import { describe } from "node:test";
import { expect, it } from "vitest";
import { maxSum } from "../utils/array";

describe("Reduce n number of array", () => {
  it("Should return 700", () => {
    const EXPECTED_VALUE = 700;
    const arr = [100, 200, 300, 400];
    const n = 2;
    const reduced = maxSum(arr, n);

    expect(reduced).toEqual(EXPECTED_VALUE);
  });

  it("Should return 39", () => {
    const EXPECTED_VALUE = 39;
    const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const n = 4;
    const reduced = maxSum(arr, n);

    expect(reduced).toEqual(EXPECTED_VALUE);
  });

  it("Should return 5", () => {
    const EXPECTED_VALUE = 5;
    const arr = [-3, 4, 0, -2, 6, -1];
    const n = 2;
    const reduced = maxSum(arr, n);

    expect(reduced).toEqual(EXPECTED_VALUE);
  });
});
