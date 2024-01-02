import { Text } from "react-native";

export const Text = ({ children }) => {
  const isDarkTheme = false;
  <Text style={{ color: isDarkTheme ? "black" : "white" }}>
    {children}
  </Text>;
};
