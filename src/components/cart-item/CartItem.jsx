import { DishCounter } from "../restaurant/dish-counter/DishCounter.jsx";
import { Text } from "../ui/text/Text.jsx";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice.js";
import classes from "./CartItem.module.css";
import { selectCartItemCountById } from "../../redux/cart/cart-slice.js";

export const CartItem = ({id}) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const count = useSelector((state) => selectCartItemCountById(state, id)) || 0;

  if (!dish) return;

  return (
    <div className={classes.dish}>
      <img className={classes.image} src={dish.image} alt="dish image"/>
      <div className={classes.description}>
        <div className={classes.block}>


          <Text type="subtitle" color="dark">{dish.name}</Text>
          <Text type="subtitle" color="primary">{dish.price * count}$</Text>

        {/*</div>*/}

        {/*<div className={classes.counter}>*/}
        </div>
          <DishCounter id={id}/>
      </div>
    </div>
  );
}
