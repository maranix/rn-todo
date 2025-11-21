module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-native/all",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "react-native",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    "react-native/react-native": true,
  },
  ignorePatterns: ["node_modules/", "babel.config.js", "metro.config.js"],
};
