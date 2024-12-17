import { redirect } from "next/navigation";

export default async function RestaurantPage({params}) {
  const { restaurantId } = await params;

  if (!restaurantId) {
    redirect('/restaurants'); // Handle cases where restaurantId might be missing
  }
  redirect(`/restaurants/${restaurantId}/menu`);
  return null;
}