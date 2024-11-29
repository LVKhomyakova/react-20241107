import { Button } from "../ui/button/Button.jsx";
import { useTheme } from "../../contexts/theme-context/use-theme.js";

export const ThemeSwitcher = () => {
  const { theme, setTheme} = useTheme();

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