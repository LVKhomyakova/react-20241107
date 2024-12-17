'use client';
import { Text } from "../../ui/text/Text.jsx";
import { DishCounter } from "../../restaurant/dish-counter/DishCounter.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import classes from "./DishPage.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../../ui/container/Container.jsx";
import { BASE_URL } from "../../../constants/api.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { useGetDishByIdQuery } from "../../../redux/services/api/index.js";
import { useParams } from "next/navigation";

export const Dish = () => {
  const {isLoggedIn} = useAuth();
  const {dishId} = useParams();
  const {data: dish, isLoading, isError} = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
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
              {isLoggedIn && <DishCounter dish={dish}/>}
            </div>
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
}