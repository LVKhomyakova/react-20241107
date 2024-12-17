import { Nav } from "../../ui/nav/Nav.jsx";
import { useParams } from "next/navigation";

const RESTAURANT_NAV_ITEMS= [
  {id: "menu", name: "Меню", path: "menu"},
  {id: "reviews", name: "Отзывы", path: "reviews"}
];

export const RestaurantNav = () => {
  const {restaurantId} = useParams();
  return <Nav items={RESTAURANT_NAV_ITEMS.map(item => ({...item, path: `/restaurants/${restaurantId}/${item.path}`}))}/>;
};