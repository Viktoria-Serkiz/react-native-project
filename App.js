import { Text, Image } from "react-native";
import { Navigator } from "./src/navigation";
import useAppState from "./src/common/hooks/useAppState";
import pizzaBackground from "./src/utils/img/pizza-bg.jpg";
import { ThemeProvider } from "./src/common/theme/ThemeContext";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {
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
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </>
  );
};

export default App;
