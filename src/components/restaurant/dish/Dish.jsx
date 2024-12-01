import { DishCounter } from "../dish-counter/DishCounter.jsx";
import { Text } from "../../ui/text/Text.jsx";
import classes from "./Dish.module.css";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";

export const Dish = ({dish}) => {
  const { isLoggedIn} = useAuth();

  return (
    <div className={classes.dish}>
      <div className={classes.block}>
        <Text type="subtitle" color="dark">{dish.name}</Text>
        <Text type="subtitle" color="primary">{dish.price}$</Text>
      </div>

      <div className={classes.block}>
        <Text>({dish.ingredients.length && dish.ingredients.join(', ')})</Text>
        {isLoggedIn && <DishCounter/>}
      </div>
    </div>
  );
}