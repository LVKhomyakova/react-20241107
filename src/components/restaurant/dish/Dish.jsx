import { DishCounter } from "../dish-counter/DishCounter.jsx";
import { Text } from "../../ui/text/Text.jsx";
import classes from "./Dish.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth-context/auth-context.jsx";

export const Dish = ({dish}) => {
  const { isLoggedIn} = useContext(AuthContext);

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