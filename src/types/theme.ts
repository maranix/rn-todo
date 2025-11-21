import { FONTS, SIZES } from "../constants/theme";

export type ColorScheme = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

export type ThemeColors = {
  light: ColorScheme;
  dark: ColorScheme;
};

export type Theme = {
  colors: ColorScheme;
  sizes: typeof SIZES;
  fonts: typeof FONTS;
};
