import { NCRColorList } from "../consts";

export const validateHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);
export const validateNCRColor = (globalToken: string) =>
  globalToken in NCRColorList;

export const handleColorInput = (color: string) => {
  if (color.length >= 6 && validateHex(color)) {
    return color;
  } else if (validateNCRColor(color)) {
    return NCRColorList[color];
  } else {
    return "#5565FD";
  }
};

export const formatGlobalToken = (colorName: string) => {
  return (
    colorName.substring(0, 2) + " " + colorName.substring(2, colorName.length)
  );
};

export const hexToRGB = (hex: string, alpha: number) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
