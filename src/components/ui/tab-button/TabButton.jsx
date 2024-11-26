import classNames from 'classnames';
import classes from './TabButton.module.css';
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context/theme-context.jsx";

export const TabButton = ({isActive, children, onClick}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button
      className={
        classNames(classes.tab, {
          [classes.active]: isActive,
          [classes.dark]: theme === 'dark'
        })
      }
      onClick={onClick}>
      {children}
    </button>
  );
}