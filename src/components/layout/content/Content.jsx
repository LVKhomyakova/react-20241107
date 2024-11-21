import { useState } from "react";
import { Restaurant } from "../../restaurant/Restaurant.jsx";
import { RESTAURANTS } from "../../../constants/mock.js";
import { TabButton } from "../../tab-button/TabButton.jsx";
import { NoData } from "../../no-data/NoData.jsx";

export const Content = () => {
  const [currRestaurant, setCurrRestaurant] = useState(RESTAURANTS[0]);

  const handleMenuClick = (id) => {
    if (currRestaurant.id !== id) {
      setCurrRestaurant(RESTAURANTS.find(item => item.id === id) || undefined);
    }
  }

  return (
    <main>
      <nav>
        {RESTAURANTS.map((restaurant) => (
          <TabButton
            key={restaurant.id}
            isActive={currRestaurant.id === restaurant.id}
            onClick={() => handleMenuClick(restaurant.id)}>
            {restaurant.name}
          </TabButton>)
        )}
      </nav>
      {currRestaurant ? <Restaurant restaurant={currRestaurant}/> : <NoData/>}
      {currRestaurant ? <Restaurant restaurant={currRestaurant}/> : <NoData/>}
      {currRestaurant ? <Restaurant restaurant={currRestaurant}/> : <NoData/>}
      {currRestaurant ? <Restaurant restaurant={currRestaurant}/> : <NoData/>}
    </main>
  );
}