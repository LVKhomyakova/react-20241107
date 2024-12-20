import { Text } from "../ui/text/Text.jsx";
import { Container } from "../ui/container/Container.jsx";
import { RestaurantNav } from "./restaurant-nav/RestaurantNav.jsx";
import { ContainerWrapper } from "../ui/container-wrapper/ContainerWrapper.jsx";
import classes from "./Restaurant.module.css";
import { BASE_URL } from "../../constants/api.js";

export const Restaurant = ({restaurant}) => {
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
    </>
  );
}