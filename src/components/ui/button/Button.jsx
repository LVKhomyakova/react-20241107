'use client';
import classes from './Button.module.css';
import classNames from "classnames";
import { useTheme } from "../../../contexts/theme-context/use-theme.js";

export const Button = ({ children, onClick}) => {
  const {theme} = useTheme();

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