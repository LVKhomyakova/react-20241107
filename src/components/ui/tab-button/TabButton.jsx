import classNames from 'classnames';
import classes from './TabButton.module.css';
import { useTheme } from "../../../contexts/theme-context/use-theme.js";

export const TabButton = ({isActive, children, onClick}) => {
  const {theme} = useTheme();

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