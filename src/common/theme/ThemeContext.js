import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const darkColors = {
  mainBackground: "black",
};
const lightColors = {
  mainBackground: "white",
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsDark(!isDark);
  //   }, 4000);
  // }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors: isDark ? darkColors : lightColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
