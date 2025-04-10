import { describe } from "node:test";
import { expect, it } from "vitest";
import { nestedObject } from "../utils/array";

describe("find even in recursive object", () => {
  it("should find even numbers in nested object", () => {
    const EXPECTED_VALUE = 12;
    const obj = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };

    expect(nestedObject(obj)).toEqual(EXPECTED_VALUE);
  });
});
