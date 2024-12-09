import { useSelector } from "react-redux";
import { Nav } from "../../ui/nav/Nav.jsx";
import { selectRestaurantNavItems } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { getRestaurants } from "../../../redux/entities/restaurants/get-restaurants.js";
import { useRequest } from "../../../redux/ui/request/use-request.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";

export const RestaurantsNav = () => {
  const items = useSelector(selectRestaurantNavItems);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUS.pending) {
    return <Loader/>;
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Рестораны не найдены."/>;
  }

  if (!items.length) return;

  return <Nav items={items}/>;
};