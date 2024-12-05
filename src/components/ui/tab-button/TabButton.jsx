import classNames from 'classnames';
import classes from './TabButton.module.css';
import { useTheme } from "../../../contexts/theme-context/use-theme.js";
import { NavLink } from "react-router-dom";

export const TabButton = ({path, children}) => {
  const {theme} = useTheme();

  return (
    <NavLink
      to={path}
      className={
        ({ isActive }) => classNames(classes.tab, {
          [classes.active]: isActive,
          [classes.dark]: theme === 'dark'
        })
      }>
      {children}
    </NavLink>
  );
}