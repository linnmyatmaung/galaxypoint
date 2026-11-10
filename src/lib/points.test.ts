import { describe, expect, it } from "vitest";
import { pointsFromSpend, pointsToMmk } from "./points";

describe("point rules", () => {
  it("earns 1 point per 200 MMK", () => {
    expect(pointsFromSpend(200)).toBe(1);
    expect(pointsFromSpend(10_000)).toBe(50);
    expect(pointsFromSpend(399)).toBe(1);
  });
  it("values 1 point at 1 MMK", () => {
    expect(pointsToMmk(2450)).toBe(2450);
  });
});
