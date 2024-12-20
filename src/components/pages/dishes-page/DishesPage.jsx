'use client';
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import classes from "./DishesPage.module.css";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { useGetDishesByRestaurantIdQuery } from "../../../redux/services/api/index.js";
import { Dish } from "../../restaurant/dish/Dish.jsx";
import { useParams } from "next/navigation";

export const DishesPage = () => {
  const {restaurantId} = useParams();
  const {data: menu, isLoading, isError} = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <Error message="Меню не найдено."/>;
  }

  return (
    <ContainerWrapper type="primary">
      <Container>
        <Text type="title" color="primary">Меню</Text>

        {menu?.length
          ? <ul className={classes.menu}>
              {
                menu.map((dish) => (
                  <li key={dish.id}>
                    <Dish dish={dish}/>
                  </li>
                ))
              }
            </ul>
          : <NoData/>
        }
      </Container>
    </ContainerWrapper>
  );
}