import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";

export const ScreenContainer = ({ children }) => {
  const contextValue = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: contextValue.colors.mainBackground,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
