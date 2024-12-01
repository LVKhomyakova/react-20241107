import { Restaurant } from "./Restaurant.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";

export const RestaurantContainer = ({id}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return;

  return (
    <Restaurant restaurant={restaurant}/>
  );
}