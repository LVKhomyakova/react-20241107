import { useState } from "react";
import { ThemeContext } from "./theme-context.js";

export const ThemeContextProvide = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};