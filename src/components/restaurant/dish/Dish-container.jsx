import { Dish } from "./Dish.jsx";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dishes/dishes-slice.js";

export const DishContainer = ({id}) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) return;

  return (<Dish dish={dish}/>);
}