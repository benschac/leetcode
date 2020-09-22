const lengthOfLongestSubstring = require("./3-medium");

describe("lengthOfLongestSubstring", () => {
  it("should handle abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it('should handle "  "  ', () => {
    expect(lengthOfLongestSubstring("  ")).toBe(1);
  });

  it("should handle bbbbb", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("should handle pwwkew", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("should handle a", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
  });

  it("should handle ccd", () => {
    expect(lengthOfLongestSubstring("ccd")).toBe(2);
  });

  it("should handle bwf", () => {
    expect(lengthOfLongestSubstring("bwf")).toBe(3);
  });
});
