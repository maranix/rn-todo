import React, { createContext, useState, useContext, ReactNode } from "react";
import { useColorScheme } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import { Theme } from "../types/theme";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme: Theme = {
    colors: isDark ? COLORS.dark : COLORS.light,
    sizes: SIZES,
    fonts: FONTS,
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
