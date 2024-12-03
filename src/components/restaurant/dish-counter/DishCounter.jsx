import { Counter } from "../../ui/counter/Counter.jsx";
import { useDishCounter } from "./useDishCounter.jsx";

export const DishCounter = ({id}) => {
  const {count, increase, decrease} = useDishCounter(id);

  return (
    <div>
      <Counter value={count} increase={increase} decrease={decrease}/>
    </div>
  );
}