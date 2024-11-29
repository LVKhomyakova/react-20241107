import { TabButton } from "./TabButton.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurants/restaurants-slice.js";

export const TabButtonContainer = ({id, isActive, onClick}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return;

  return (
    <TabButton
      key={id}
      isActive={isActive}
      onClick={() => onClick(id)}>
      {restaurant.name}
    </TabButton>
  );
}