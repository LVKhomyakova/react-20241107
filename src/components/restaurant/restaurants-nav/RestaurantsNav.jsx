import { useSelector } from "react-redux";
import { Nav } from "../../ui/nav/Nav.jsx";
import { selectRestaurantMenuItems } from "../../../redux/entities/restaurants/restaurants-slice.js";

export const RestaurantsNav = () => {
  const items = useSelector(selectRestaurantMenuItems);

  return <Nav items={items}/>;
};