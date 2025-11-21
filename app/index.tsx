import { View, StyleSheet } from "react-native";
import Button from "../src/components/Button";
import { useTheme } from "../src/context/ThemeContext";

export default function Index() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Button
        title="Primary Button"
        onPress={() => console.log("Primary pressed")}
      />
      <View style={{ marginVertical: 10 }} />
      <Button
        title="Secondary Button"
        onPress={() => console.log("Secondary pressed")}
        variant="secondary"
      />
      <View style={{ marginVertical: 10 }} />
      <Button
        title={`Toggle to ${isDark ? "Light" : "Dark"} Theme`}
        onPress={toggleTheme}
        variant="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
