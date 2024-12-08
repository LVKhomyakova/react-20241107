import { RestaurantContainer } from "../../restaurant/Restaurant-container.jsx";
import { useParams } from "react-router-dom";
import { useRequest } from "../../../redux/ui/request/use-request.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { getRestaurant } from "../../../redux/entities/restaurants/get-restaurant.js";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";

export const RestaurantPage = () => {
  const {restaurantId} = useParams();
  const requestStatus = useRequest(getRestaurant, restaurantId);

  if (requestStatus === REQUEST_STATUS.pending) {
    return <Loader/>;
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Ресторан не найден."/>;
  }

  return <RestaurantContainer id={restaurantId}/>;
}