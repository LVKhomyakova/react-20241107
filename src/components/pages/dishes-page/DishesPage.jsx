import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { DishContainer } from "../../restaurant/dish/Dish-container.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { selectRestaurantMenuById } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import classes from "./DishesPage.module.css";
import { useRequest } from "../../../redux/ui/request/use-request.js";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { getDishes } from "../../../redux/entities/dishes/get-dishes.js";

export const DishesPage = () => {
  const {restaurantId} = useParams();
  const menu = useSelector((state) => selectRestaurantMenuById(state, restaurantId));
  const requestStatus = useRequest(getDishes, restaurantId);

  if (requestStatus === REQUEST_STATUS.pending) {
    return <Loader/>;
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Меню не найдено."/>;
  }

  return (
    <ContainerWrapper type="primary">
      <Container>
        <Text type="title" color="primary">Меню</Text>

        {menu?.length
          ? <ul className={classes.menu}>
              {
                menu.map((dishId) => (
                  <li key={dishId}>
                    <DishContainer id={dishId}/>
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