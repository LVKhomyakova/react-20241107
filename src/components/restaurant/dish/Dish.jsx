import { DishCounter } from "../dish-counter/DishCounter.jsx";
import { Text } from "../../ui/text/Text.jsx";
import classes from "./Dish.module.css";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import { useNavigate } from "react-router-dom";

export const Dish = ({dish}) => {
  const { isLoggedIn} = useAuth();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/dish/${id}`);
  };

  return (
    <div className={classes.dish} onClick={() => handleClick(dish.id)}>
      <img className={classes.image} src={dish.image} alt="dish image"/>
      <div className={classes.description}>
        <div className={classes.block}>
          <Text type="subtitle" color="dark">{dish.name}</Text>
          <Text type="subtitle" color="primary">{dish.price}$</Text>
        </div>

        <div className={classes.block}>
          <Text>({dish.ingredients.length && dish.ingredients.join(', ')})</Text>
          {isLoggedIn && <DishCounter id={dish.id}/>}
        </div>
      </div>
    </div>
  );
}