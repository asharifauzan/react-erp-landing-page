import { describe } from "node:test";
import { expect, it } from "vitest";
import { sortArray } from "../utils/array";

describe("Sort array", () => {
  it("Should sort array from max to min", () => {
    const EXPECTED_VALUE = [5, 4, 3, 3, 2, 2, 1, 1];
    const arr = [1, 2, 4, 3, 5, 3, 2, 1];
    const sortedArr = sortArray(arr);

    expect(sortedArr).toEqual(EXPECTED_VALUE);
  });
});
