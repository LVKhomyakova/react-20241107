'use client';
import { Restaurant } from "./Restaurant.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/api/index.js";

export const RestaurantContainer = ({restaurantId}) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  if (!restaurant) return;

  return (
    <Restaurant restaurant={restaurant}/>
  );
}