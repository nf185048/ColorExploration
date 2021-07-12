import * as Theme from "@ncr-design-system/theme-utils";

export type NCRShades = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export interface ThemeInput {
  UIPrimary: Theme.ColorBase;
  UISecondary: Theme.ColorBase;
  UIFill: Theme.ColorBase;
  UIBorder: Theme.ColorBase;
  UIText: Theme.ColorBase;
  UIPrimaryShade: number;
  UISecondaryShade: number;
  UIFillShade: number;
  UIBorderShade: number;
  UITextShade: number;
}
