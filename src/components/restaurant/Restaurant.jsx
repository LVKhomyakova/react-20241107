import { NoData } from "../ui/no-data/NoData.jsx";
import { ReviewForm } from "./review-form/ReviewForm.jsx";
import { Text } from "../ui/text/Text.jsx";
import { Container } from "../ui/container/Container.jsx";
import classNames from "classnames";
import classes from "./Restaurant.module.css"
import { useAuth } from "../../contexts/auth-context/use-auth.js";
import { DishContainer } from "./dish/Dish-container.jsx";
import { ReviewContainer } from "./review/Review-container.jsx";

export const Restaurant = ({restaurant}) => {
  const { isLoggedIn} = useAuth();

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
            ? <div className={classes.menu}>{restaurant.menu.map((dishId) => (<DishContainer key={dishId} id={dishId}/>))}</div>
            : <NoData/>
          }
        </Container>
      </section>

      <section className={classes.wrapper}>
        <Container>
          <Text type="title" color="primary">Отзывы</Text>
          {restaurant.reviews?.length
            ? <div className={classes.reviews}>{restaurant.reviews.map((reviewId) => (
              <ReviewContainer key={reviewId} id={reviewId}/>))}</div>
            : <NoData/>
          }
        </Container>
      </section>

      {isLoggedIn &&
        <section className={classNames(classes.wrapper, classes.primary)}>
          <Container>
            <Text type="title" color="primary">Оставьте отзыв</Text>
            <ReviewForm/>
          </Container>
        </section>
      }
    </>
  )
}