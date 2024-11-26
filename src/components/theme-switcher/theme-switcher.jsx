import { Button } from "../ui/button/Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context/theme-context.jsx";

export const ThemeSwitcher = () => {
  const { theme, setTheme} = useContext(ThemeContext);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={switchTheme}>{theme === "light" ? 'To dark' : 'To light' }</Button>
    </div>
  );
}