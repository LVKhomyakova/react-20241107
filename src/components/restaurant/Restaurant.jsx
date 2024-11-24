import { Dish } from "./dish/Dish.jsx";
import { NoData } from "../ui/no-data/NoData.jsx";
import { Review } from "./review/Review.jsx";
import { ReviewForm } from "./review-form/ReviewForm.jsx";
import { Text } from "../ui/text/Text.jsx";
import { Container } from "../ui/container/Container.jsx";
import classNames from "classnames";
import classes from "./Restaurant.module.css"

export const Restaurant = ({restaurant}) => {
  return (
    <>
      <section className={classNames(classes.wrapper, classes.primary)}>
        <Container>
          <Text type="h2">{restaurant.name}</Text>
        </Container>
      </section>

      <section className={classes.wrapper}>
        <Container>
          <Text type="title" color="primary">Меню</Text>
          {restaurant.menu?.length
            ? <div className={classes.menu}>{restaurant.menu.map((dish) => (<Dish key={dish.id} dish={dish}/>))}</div>
            : <NoData/>
          }
        </Container>
      </section>

      <section className={classes.wrapper}>
        <Container>
          <Text type="title" color="primary">Отзывы</Text>
          {restaurant.reviews?.length
            ? <div className={classes.reviews}>{restaurant.reviews.map((review) => (
              <Review key={review.id} review={review}/>))}</div>
            : <NoData/>
          }
        </Container>
      </section>

      <section className={classNames(classes.wrapper, classes.primary)}>
        <Container>
          <Text type="title" color="primary">Оставьте отзыв</Text>
          <ReviewForm/>
        </Container>
      </section>
    </>
  )
}