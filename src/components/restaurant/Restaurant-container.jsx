import { Restaurant } from "./Restaurant.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/api/index.js";

export const RestaurantContainer = ({id}) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === id),
    }),
  });

  if (!restaurant) return;

  return (
    <Restaurant restaurant={restaurant}/>
  );
}