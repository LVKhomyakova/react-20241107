import { RestaurantContainer } from "../../restaurant/Restaurant-container.jsx";
import { useParams } from "react-router-dom";

export const RestaurantPage = () => {
  const {restaurantId} = useParams();

  return <RestaurantContainer id={restaurantId}/>;
}