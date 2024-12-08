import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dishes/dishes-slice.js";
import { Text } from "../../ui/text/Text.jsx";
import { DishCounter } from "../../restaurant/dish-counter/DishCounter.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import classes from "./DishPage.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../../ui/container/Container.jsx";
import { BASE_URL } from "../../../constants/api.js";
import { useRequest } from "../../../redux/ui/request/use-request.js";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { getDish } from "../../../redux/entities/dishes/get-dish.js";

export const DishPage = () => {
  const {isLoggedIn} = useAuth();
  const {dishId} = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === REQUEST_STATUS.pending) {
    return <Loader/>;
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Блюдо не найдено."/>;
  }
  return (
    <ContainerWrapper>
      <Container>
        <div className={classes.dish}>
          <img className={classes.image} src={`${BASE_URL}/${dish.image}`} alt="dish image"/>
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
      </Container>
    </ContainerWrapper>
  );
}