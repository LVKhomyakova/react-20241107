import { Counter } from "../../ui/counter/Counter.jsx";
import { useDishCounter } from "./useDishCounter.jsx";

export const DishCounter = ({dish}) => {
  const {count, increase, decrease} = useDishCounter(dish);

  return (
    <div>
      <Counter value={count} increase={increase} decrease={decrease}/>
    </div>
  );
}