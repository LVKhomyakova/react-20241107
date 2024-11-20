import { Dish } from "./dish/Dish.jsx";
import { NoData } from "../no-data/NoData.jsx";
import { Review } from "./review/Review.jsx";
import { ReviewForm } from "./review-form/ReviewForm.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <section>
      <h2>{restaurant.name}</h2>

      <h3>Меню</h3>
      {restaurant.menu?.length
        ? <ul>{restaurant.menu.map((dish) => (<li key={dish.id}><Dish dish={dish}/></li>))}</ul>
        : <NoData/>
      }

      <h3>Отзывы</h3>
      {restaurant.reviews?.length
        ? <ul>{restaurant.reviews.map((review) => (<li key={review.id}><Review review={review}/></li>))}</ul>
        : <NoData/>
      }

      <hr/>
      <ReviewForm/>
      <hr/>
    </section>
  )
}