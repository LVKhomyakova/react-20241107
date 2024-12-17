'use client';
import { ContainerWrapper } from "../../../components/ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../../../components/ui/container/Container.jsx";
import classes from "../../../components/restaurant/Restaurant.module.css";
import { BASE_URL } from "../../../constants/api.js";
import { Text } from "../../../components/ui/text/Text.jsx";
import { RestaurantNav } from "../../../components/restaurant/restaurant-nav/RestaurantNav.jsx";
import { useGetRestaurantsQuery } from "../../../redux/services/api/index.js";
import { useParams } from "next/navigation";
import { Loader } from "../../../components/ui/loader/loader.jsx";
import { Error } from "../../../components/ui/error/Error.jsx";
import { NoData } from "../../../components/ui/no-data/NoData.jsx";

export default function RestaurantLayout({children}) {
  const {restaurantId} = useParams();

  const { data: restaurant, isLoading, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <Error message="Меню не найдено."/>;
  }

  if (!restaurant) {
    return <NoData/>;
  }

  return (
    <>
      <ContainerWrapper type="primary">
        <Container>
          <img className={classes.image} src={`${BASE_URL}/${restaurant.image}`} alt="restaurant image"/>
        </Container>
      </ContainerWrapper>

      <Text type="h2">{restaurant.name}</Text>

      <ContainerWrapper type="primary">
        <RestaurantNav/>
      </ContainerWrapper>
      {children}
    </>
  );
}