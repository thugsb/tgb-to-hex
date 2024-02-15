export function rgbToHex(colors: number[]): string {
  const boundedNumbers = colors.map((color: number): number => {
    if (color < 0) {
      return 0;
    } else if (color > 255) {
      return 255;
    }
    return color;
  });
  const convertedNumbers = boundedNumbers.map((col: number) => {
    return col.toString(16).toUpperCase();
  });

  return convertedNumbers.join("");
}
