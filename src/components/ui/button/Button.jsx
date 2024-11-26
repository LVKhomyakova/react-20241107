import classes from './Button.module.css';
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context/theme-context.jsx";
import classNames from "classnames";

export const Button = ({ children, onClick}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={classNames(classes.button, {
        [classes.dark]: theme === "dark",
      })}
      onClick={onClick}>
      {children}
    </button>
  );
}