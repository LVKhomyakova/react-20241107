import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { DishContainer } from "../dish/Dish-container.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { selectRestaurantMenuById } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import classes from "./DishList.module.css";

export const DishList = () => {
  const {restaurantId} = useParams();
  const menu = useSelector((state) => selectRestaurantMenuById(state, restaurantId));

  return (
    <ContainerWrapper type="primary">
      <Container>
        <Text type="title" color="primary">Меню</Text>
        {menu?.length
          ? <div className={classes.menu}>
              {
                menu.map((dishId) => (
                  <DishContainer key={dishId} id={dishId}/>
                ))
              }
            </div>
          : <NoData/>
        }
      </Container>
    </ContainerWrapper>
  );
}