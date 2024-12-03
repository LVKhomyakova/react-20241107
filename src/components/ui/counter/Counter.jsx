import classes from './Counter.module.css';

export const Counter = ({value, onChange, increase, decrease}) => {
  const handleDecrease = (event) => {
    event.stopPropagation();
    if (onChange) onChange(value - 1);
    if (decrease) decrease();
  };

  const handleIncrease = (event) => {
    event.stopPropagation();
    if (onChange) onChange(value + 1);
    if (increase) increase();
  };

  return (
    <div className={classes.counter}>
      <button type="button" onClick={handleDecrease}>-</button>
      {value}
      <button type="button" onClick={handleIncrease}>+</button>
    </div>
  );
}