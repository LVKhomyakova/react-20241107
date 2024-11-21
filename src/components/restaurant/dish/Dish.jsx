import { DishCounter } from "../dish-counter/DishCounter.jsx";

export const Dish = ({dish}) => {
  return (
    <>
      <span>{dish.name} </span>
      <span>({dish.ingredients.length && dish.ingredients.join(', ')})</span>
      <span style={{color: 'green'}}> - {dish.price}$</span>
      <DishCounter/>
    </>
  );
}