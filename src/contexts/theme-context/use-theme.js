import { useContext } from "react";
import { ThemeContext } from "./theme-context.jsx";

export const useTheme = () => useContext(ThemeContext);