import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#16a085', //Vibrant Teal
  background: '#111827', // Dark Grey
  card: '#1F2937', // Lighter Grey for input fields
  text: '#FFFFFF', // White
  border: '#374151', // Subtle border color
  notification: '#FF0000', // Default red for notifications

  // light theme
  light_primary: '#16a085',
  light_background: '#FFFFFF',
  light_card: '#F3F4F6',
  light_text: '#111827',
  light_border: '#E5E7EB',
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
  h1: { fontFamily: 'Inter-Bold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Inter-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Inter-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Inter-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'Inter-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Inter-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Inter-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'Inter-Regular', fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
