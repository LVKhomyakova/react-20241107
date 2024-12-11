import { DishCounter } from "../restaurant/dish-counter/DishCounter.jsx";
import { Text } from "../ui/text/Text.jsx";
import { useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { selectCartItemCountById } from "../../redux/ui/cart/cart-slice.js";
import { BASE_URL } from "../../constants/api.js";
import { useGetDishByIdQuery } from "../../redux/services/api/index.js";

export const CartItem = ({id}) => {
  const {data: dish} = useGetDishByIdQuery(id)
  const {count} = useSelector((state) => selectCartItemCountById(state, id)) || 0;

  if (!dish) return;

  return (
    <div className={classes.dish}>
      <img className={classes.image} src={`${BASE_URL}/${dish.image}`} alt="dish image"/>
      <div className={classes.description}>
        <div className={classes.block}>
          <Text type="subtitle" color="dark">{dish.name}</Text>
          <Text type="subtitle" color="primary">{dish.price * count}$</Text>
        </div>
        <DishCounter dish={dish}/>
      </div>
    </div>
  );
}
