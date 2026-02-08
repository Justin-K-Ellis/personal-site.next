import { describe, it, expect } from "vitest";
import arrayToString from "@/lib/arrayToString";

describe("the arrayToString function", () => {
  it("should return an empty string when input empty", () => {
    const result = arrayToString([]);
    expect(result.length).toEqual(0);
  });

  it("should return the text without commas when length = 1", () => {
    const result = arrayToString(["cat"]);
    expect(result).toBe("cat");
  });

  it("should return text separated by commas when length > 2", () => {
    const result = arrayToString(["cats", "dogs"]);
    expect(result).toBe("cats, dogs");
  });
});
