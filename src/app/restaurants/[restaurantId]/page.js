import { redirect } from "next/navigation";

export default async function RestaurantPage({params}) {
  const { restaurantId } = await params;

  if (!restaurantId) {
    redirect('/restaurants');
  }
  redirect(`/restaurants/${restaurantId}/menu`);
  return null;
}