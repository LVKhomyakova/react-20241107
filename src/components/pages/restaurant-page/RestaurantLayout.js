import { RestaurantContainer } from "../../../components/restaurant/Restaurant-container.jsx";

export default async function RestaurantLayout({params, children}) {
  const { restaurantId } = await params;
  return (
    <>
      <RestaurantContainer restaurantId={restaurantId}/>
      {children}
    </>
  );
}