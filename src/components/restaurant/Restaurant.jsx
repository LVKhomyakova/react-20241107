import { Dish } from "./dish/Dish.jsx";
import { NoData } from "../no-data/NoData.jsx";
import { Review } from "./review/Review.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <section>
      <h2>{restaurant.name}</h2>

      <h3>Меню</h3>
      {restaurant.menu?.length
        ? <ul>{restaurant.menu.map((dish) => (<Dish key={dish.id} dish={dish}/>))}</ul>
        : <NoData/>
      }

      <h3>Отзывы</h3>
      {restaurant.reviews?.length
        ? <ul>{restaurant.reviews.map((review) => (<Review key={review.id} review={review}/>))}</ul>
        : <NoData/>
      }
    </section>
  )
}