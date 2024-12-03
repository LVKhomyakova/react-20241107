import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { ReviewContainer } from "../review/Review-container.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import { selectRestaurantReviewsById } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { ReviewForm } from "../review-form/ReviewForm.jsx";
import classes from "./ReviewList.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";

export const ReviewList = () => {
  const {isLoggedIn} = useAuth();
  const {restaurantId} = useParams();
  const reviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));

  return (
    <>
      <ContainerWrapper>
        <Container>
          <Text type="title" color="primary">Отзывы</Text>
          {reviews?.length
            ? <div className={classes.reviews}>{reviews.map((reviewId) => (
              <ReviewContainer key={reviewId} id={reviewId}/>))}</div>
            : <NoData/>
          }
        </Container>
      </ContainerWrapper>

      {isLoggedIn &&
        <ContainerWrapper type="primary">
          <Container>
            <Text type="title" color="primary">Оставьте отзыв</Text>
            <ReviewForm/>
          </Container>
        </ContainerWrapper>
      }
    </>
  );
}