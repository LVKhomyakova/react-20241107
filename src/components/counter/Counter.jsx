import { useState } from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value < MAX_COUNT)
      setValue(prev => prev + 1);
  }
  const decrease = () => {
    if (value > MIN_COUNT)
      setValue(prev => prev - 1);
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      {value}
      <button onClick={increase}>+</button>
    </div>
  );
}