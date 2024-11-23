import { RESTAURANTS } from "../../../constants/mock.js";
import { TabButton } from "../../ui/tab-button/TabButton.jsx";
import classes from "./Nav.module.css"

export const Nav = ({currRestaurant, handleMenuClick}) => {
  return (
    <div>
      <div className="container">
        <nav className={classes.nav}>
          {RESTAURANTS.map((restaurant) => (
            <TabButton
              key={restaurant.id}
              isActive={currRestaurant.id === restaurant.id}
              onClick={() => handleMenuClick(restaurant.id)}>
              {restaurant.name}
            </TabButton>)
          )}
        </nav>
      </div>
    </div>
  );
};