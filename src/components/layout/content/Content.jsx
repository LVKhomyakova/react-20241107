import { useState } from "react";
import { Restaurant } from "../../restaurant/Restaurant.jsx";
import { RESTAURANTS } from "../../../constants/mock.js";
import { NoData } from "../../no-data/NoData.jsx";
import { Nav } from "../nav/Nav.jsx";
import classes from "./Content.module.css"

export const Content = () => {
  const [currRestaurant, setCurrRestaurant] = useState(RESTAURANTS[0]);

  const handleMenuClick = (id) => {
    if (currRestaurant.id !== id) {
      setCurrRestaurant(RESTAURANTS.find(item => item.id === id) || undefined);
    }
  }

  return (
    <main className="container">
      <Nav currRestaurant={currRestaurant} handleMenuClick={handleMenuClick} />
      {currRestaurant ? <Restaurant key={currRestaurant.id} restaurant={currRestaurant}/> : <NoData/>}
    </main>
  );
}