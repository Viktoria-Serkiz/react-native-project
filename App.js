import React, { useState, createContext } from "react";
import { Text, Image } from "react-native";
import { Navigator } from "./src/navigation";
import useAppState from "./src/common/hooks/useAppState";
import pizzaBackground from "./src/utils/img/pizza-bg.jpg";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const appState = useAppState();

  return (
    <>
      {appState !== "active" && (
        <Image
          source={pizzaBackground}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <ThemeContext.Provider value={{ color: theme }}>
        <Navigator />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
