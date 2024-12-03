import { Nav } from "../../ui/nav/Nav.jsx";

const RESTAURANT_NAV_ITEMS= [
  {id: "menu", name: "Меню", path: "menu"},
  {id: "reviews", name: "Отзывы", path: "reviews"}
];

export const RestaurantNav = () => {
  return <Nav items={RESTAURANT_NAV_ITEMS}/>;
};