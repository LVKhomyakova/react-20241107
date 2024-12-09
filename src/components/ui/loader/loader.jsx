import classes from './loader.module.css';

export const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}></div>
    </div>
  );
}