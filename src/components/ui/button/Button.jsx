import classes from './Button.module.css';

export const Button = ({ children, onClick}) => {
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}