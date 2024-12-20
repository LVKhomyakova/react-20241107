import classes from './Counter.module.css';

export const Counter = ({value = 0, onChange, increase, decrease}) => {
  const handleDecrease = (event) => {
    event.stopPropagation();
    event.preventDefault()
    if (onChange) onChange(value - 1);
    if (decrease) decrease();
  };

  const handleIncrease = (event) => {
    event.stopPropagation();
    event.preventDefault()
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