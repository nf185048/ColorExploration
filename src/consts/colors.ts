import { ThemeInput } from "../types";
import * as Theme from "@ncr-design-system/theme-utils";

export const NCRColorList: { [color: string]: string } = {
  UIPrimary: "#5565FD",
  UIRed: "#FF3B30",
  UIPurple: "#A35DD7",
  UIBlue: "#2E7DF7",
  UITeal: "#008FB2",
  UIGreen: "#469F3D",
  UIOrange: "#F0681E",
  UIPink: "#EE586B",
};

export const DefaultThemeInput: ThemeInput = {
  UIPrimary: Theme.generateColor({ main: "red", type: "light" }),
  UISecondary: Theme.generateColor({ main: "red", type: "light" }),
  UIFill: Theme.generateColor({ main: "red", type: "light" }),
  UIBorder: Theme.generateColor({ main: "red", type: "light" }),
  UIText: Theme.generateColor({ main: "red", type: "light" }),
  UIPrimaryShade: 50,
  UISecondaryShade: 50,
  UIFillShade: 50,
  UIBorderShade: 50,
  UITextShade: 50,
};
