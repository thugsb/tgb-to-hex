import { rgbToHex } from "../src/calc";
describe("test color conversion function", () => {
  it("should return ffffff for white", () => {
    expect(rgbToHex([255, 255, 255])).toBe("FFFFFF");
  });
  it("should return 5 for add(2,3)", () => {
    // expect(rgbToHex(2, 3)).toBe(5);
  });
});
