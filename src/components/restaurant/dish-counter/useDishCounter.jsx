import { useState } from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const useDishCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const onChange = (value) => {
    if (value >= MIN_COUNT && value <= MAX_COUNT) {
      setCount(value);
    }
  };

  return {
    count,
    onChange,
  }
}