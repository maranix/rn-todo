import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  light: {
    primary: "#16a085",
    background: "#F9FAFB",
    card: "#FFFFFF",
    text: "#111827",
    border: "#D1D5DB",
    notification: "#FF0000",
  },
  dark: {
    primary: "#16a085",
    background: "#111827",
    card: "#1F2937",
    text: "#FFFFFF",
    border: "#374151",
    notification: "#FF0000",
  },
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: "Inter", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Inter", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Inter", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Inter", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Inter", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Inter", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Inter", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Inter", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
