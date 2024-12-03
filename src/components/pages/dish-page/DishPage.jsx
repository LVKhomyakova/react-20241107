import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dishes/dishes-slice.js";
import { Text } from "../../ui/text/Text.jsx";
import { DishCounter } from "../../restaurant/dish-counter/DishCounter.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import classes from "./DishPage.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../../ui/container/Container.jsx";

export const DishPage = () => {
  const {isLoggedIn} = useAuth();
  const {dishId} = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <ContainerWrapper>
      <Container>
        <div className={classes.dish}>
          <img className={classes.image} src={dish.image} alt="dish image"/>
          <div className={classes.description}>
            <div className={classes.block}>
              <Text type="subtitle" color="dark">{dish.name}</Text>
              <Text type="subtitle" color="primary">{dish.price}$</Text>
            </div>

            <div className={classes.block}>
              <Text>({dish.ingredients.length && dish.ingredients.join(', ')})</Text>
              {isLoggedIn && <DishCounter/>}
            </div>
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
}