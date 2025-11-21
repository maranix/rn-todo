import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { SIZES, FONTS } from "../constants/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const buttonStyles: ViewStyle[] = [
    styles.button,
    {
      backgroundColor:
        variant === "primary" ? theme.colors.primary : "transparent",
      borderColor: theme.colors.primary,
      borderWidth: variant === "secondary" ? 1 : 0,
    },
    style,
  ];

  const textStyles: TextStyle[] = [
    styles.text,
    {
      color: variant === "primary" ? theme.colors.text : theme.colors.primary,
      ...FONTS.body3,
    },
    textStyle,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Button;
