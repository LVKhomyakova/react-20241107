import { Dish } from "./dish/Dish.jsx";
import { NoData } from "../no-data/NoData.jsx";
import { Review } from "./review/Review.jsx";
import { ReviewForm } from "./review-form/ReviewForm.jsx";
import { Text } from "../text/Text.jsx";
import classes from "./Restaurant.module.css"

export const Restaurant = ({restaurant}) => {
  return (
    <section className={classes.restaurant}>
      <h2>{restaurant.name}</h2>

      <Text type="title" color="primary">Меню</Text>
      {restaurant.menu?.length
        ? <div className={classes.menu}>{restaurant.menu.map((dish) => (<Dish key={dish.id} dish={dish}/>))}</div>
        : <NoData/>
      }

      <Text type="title" color="primary">Отзывы</Text>
      {restaurant.reviews?.length
        ? <div className={classes.reviews}>{restaurant.reviews.map((review) => (<Review key={review.id} review={review}/>))}</div>
        : <NoData/>
      }

      <Text type="title" color="primary">Оставьте отзыв</Text>
      <div className={classes.form}>
        <ReviewForm/>
      </div>
    </section>
  )
}