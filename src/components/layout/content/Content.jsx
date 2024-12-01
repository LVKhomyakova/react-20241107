import { useState } from "react";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { Nav } from "../nav/Nav.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantContainer } from "../../restaurant/Restaurant-container.jsx";

export const Content = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [currRestaurantId, setCurrRestaurantId] = useState(restaurantsIds[0]);

  const handleMenuClick = (id) => {
    if (currRestaurantId !== id) {
      setCurrRestaurantId(id);
    }
  }

  return (
    <main>
      <Nav currId={currRestaurantId} ids={restaurantsIds} handleMenuClick={handleMenuClick} />
      {currRestaurantId ? <RestaurantContainer key={currRestaurantId} id={currRestaurantId}/> : <NoData/>}
    </main>
  );
}