import classNames from 'classnames';
import classes from './TabButton.module.css';

export const TabButton = ({isActive, children, onClick}) => {
  return (
    <button className={classNames(classes.tab, {[classes.active]: isActive})} onClick={onClick}>
      {children}
    </button>
  );
}