import { describe, it, expect } from "vitest";
import { evaluateExpression } from "../src/Calculator";

describe("Calculator logic", () => {
  it("adds numbers correctly", () => {
    expect(evaluateExpression("2+3")).toBe(7);
  });

  it("handles multiplication", () => {
    expect(evaluateExpression("4*5")).toBe(20);
  });

  it("handles division", () => {
    expect(evaluateExpression("8/2")).toBe(4);
  });

  it("throws error for invalid input", () => {
    expect(() => evaluateExpression("2+")).toThrow();
  });
});

