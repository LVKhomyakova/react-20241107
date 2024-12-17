import { RestaurantContainer } from "../../restaurant/Restaurant-container.jsx";

export const Restaurant = async ({restaurantId}) => {

  return <RestaurantContainer id={restaurantId}/>;
}