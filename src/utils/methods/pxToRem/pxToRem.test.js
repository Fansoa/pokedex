import { expect, test } from "vitest";
import pxToRem from "@/src/utils/methods/pxToRem";

test("pxToRem function should return 1rem if it takes the number 16 as a parameter", () => {
  expect(pxToRem(16)).toBe("1rem");
});
