import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { createSerializer } from "@emotion/jest";

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer());

afterEach(() => {
  cleanup();
});
