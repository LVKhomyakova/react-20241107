import { Counter } from "../../counter/Counter.jsx";

export const Dish = ({dish}) => {
  return (
    <li key={dish.id}>
      <span>{dish.name} </span>
      <span>({dish.ingredients.length && dish.ingredients.join(', ')})</span>
      <span style={{color: 'green'}}> - {dish.price}$</span>
      <Counter/>
    </li>
  );
}