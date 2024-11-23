import { Counter } from "../../ui/counter/Counter.jsx";
import { useDishCounter } from "./useDishCounter.jsx";

export const DishCounter = ({value = 0}) => {
  const {count, onChange} = useDishCounter(value);

  return (
    <div>
      <Counter value={count} onChange={onChange}/>
    </div>
  );
}