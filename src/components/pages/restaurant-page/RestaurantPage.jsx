import { RestaurantContainer } from "../../restaurant/Restaurant-container.jsx";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../../redux/entities/restaurants/restaurants-slice.js";

export const RestaurantPage = () => {
  const {restaurantId} = useParams();
  const restaurantIds = useSelector(selectRestaurantsIds);

  if (!restaurantId && restaurantIds.length > 0) {
    return <Navigate to={`/restaurant/${restaurantIds[0]}/menu`} />;
  }

  return <RestaurantContainer id={restaurantId}/>;
}