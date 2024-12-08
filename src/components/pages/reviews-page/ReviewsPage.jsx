import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { ReviewContainer } from "../../restaurant/review/Review-container.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import { selectRestaurantReviewsById } from "../../../redux/entities/restaurants/restaurants-slice.js";
import { ReviewForm } from "../../restaurant/review-form/ReviewForm.jsx";
import classes from "./ReviewsPage.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { useRequest } from "../../../redux/ui/request/use-request.js";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { getReviews } from "../../../redux/entities/reviews/get-reviews.js";
import { getUsers } from "../../../redux/entities/users/get-users.js";

export const ReviewsPage = () => {
  const {isLoggedIn} = useAuth();
  const {restaurantId} = useParams();
  const reviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
  const reviewsRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers, restaurantId);

  if (reviewsRequestStatus === REQUEST_STATUS.pending || usersRequestStatus === REQUEST_STATUS.pending) {
    return <Loader/>;
  }

  if (reviewsRequestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Отзывы не найдены."/>;
  }
  if (usersRequestStatus === REQUEST_STATUS.rejected) {
    return <Error message="Пользователи не найдены."/>;
  }

  return (
    <>
      <ContainerWrapper>
        <Container>
          <Text type="title" color="primary">Отзывы</Text>
          {reviews?.length
            ? <ul className={classes.reviews}>
                {
                  reviews.map((reviewId) => (
                    <li key={reviewId}>
                      <ReviewContainer id={reviewId}/>
                    </li>
                  ))
                }
              </ul>
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