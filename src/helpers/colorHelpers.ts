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

export const formatGlobalToken = (colorName: string) =>
  colorName.substring(0, 2) + " " + colorName.substring(2, colorName.length);
