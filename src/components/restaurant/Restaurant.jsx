import { Dish } from "./dish/Dish.jsx";
import { NoData } from "../ui/no-data/NoData.jsx";
import { Review } from "./review/Review.jsx";
import { ReviewForm } from "./review-form/ReviewForm.jsx";
import { Text } from "../ui/text/Text.jsx";
import classes from "./Restaurant.module.css"
import classNames from "classnames";

export const Restaurant = ({restaurant}) => {
  return (
    <>
      <section className={classNames(classes.wrapper, classes.primary)}>
        <h2>{restaurant.name}</h2>
      </section>

      <section className={classes.wrapper}>
        <div className="container">
          <Text type="title" color="primary">Меню</Text>
          {restaurant.menu?.length
            ? <div className={classes.menu}>{restaurant.menu.map((dish) => (<Dish key={dish.id} dish={dish}/>))}</div>
            : <NoData/>
          }
        </div>
      </section>

      <section className={classes.wrapper}>
        <div className="container">
          <Text type="title" color="primary">Отзывы</Text>
          {restaurant.reviews?.length
            ? <div className={classes.reviews}>{restaurant.reviews.map((review) => (
              <Review key={review.id} review={review}/>))}</div>
            : <NoData/>
          }
        </div>
      </section>

      <section className={classNames(classes.wrapper, classes.primary)}>
        <div className="container">
          <Text type="title" color="primary">Оставьте отзыв</Text>
          <ReviewForm/>
        </div>
      </section>
    </>
  )
}