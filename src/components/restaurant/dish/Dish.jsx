import { Link } from "react-router-dom";
import { DishCounter } from "../dish-counter/DishCounter.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import classes from "./Dish.module.css";
import { BASE_URL } from "../../../constants/api.js";

export const Dish = ({dish}) => {
  const {isLoggedIn} = useAuth();

  return (
    <Link to={`/dish/${dish.id}`}>
      <div className={classes.dish}>
        <img className={classes.image} src={`${BASE_URL}/${dish.image}`} alt="dish image"/>

        <div className={classes.description}>
          <div className={classes.block}>
            <Text type="subtitle" color="dark">{dish.name}</Text>
            <Text type="subtitle" color="primary">{dish.price}$</Text>
          </div>

          <div className={classes.block}>
            <Text>({dish.ingredients.length && dish.ingredients.join(', ')})</Text>
            {isLoggedIn && <DishCounter dish={dish}/>}
          </div>
        </div>
      </div>
    </Link>
  );
}