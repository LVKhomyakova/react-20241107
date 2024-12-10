import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container.jsx";
import { Text } from "../../ui/text/Text.jsx";
import { NoData } from "../../ui/no-data/NoData.jsx";
import { useAuth } from "../../../contexts/auth-context/use-auth.js";
import { ReviewForm } from "../../restaurant/review-form/ReviewForm.jsx";
import classes from "./ReviewsPage.module.css";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "../../../redux/services/api/index.js";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { Review } from "../../restaurant/review/Review.jsx";

export const ReviewsPage = () => {
  const [currReview, setCurrReview] = useState();
  const {isLoggedIn, user} = useAuth();
  const {restaurantId} = useParams();
  const {data: reviews, isFetching: isReviewsFetching, isError} = useGetReviewsByRestaurantIdQuery(restaurantId);
  const [addReview, { isLoading: isAddReviewFetching }] = useAddReviewMutation();
  const [updateReview, { isLoading: isUpdateReviewFetching }] = useUpdateReviewMutation();
  useGetUsersQuery();

  useEffect(() => {
    if (user?.id && !isReviewsFetching && reviews.length > 0) {
      setCurrReview(reviews.find(review => review.userId === user.id) || null);
    } else {
      setCurrReview(null);
    }
  }, [isReviewsFetching, reviews, user?.id]);

  const handleSubmitReviewForm = useCallback((review) => {
    if (currReview) {
      updateReview({ reviewId: currReview.id, review })
    } else {
      addReview({
        restaurantId,
        review: { ...review, userId: user.id },
      });
    }
  }, [addReview, updateReview, restaurantId, currReview, user?.id]);

  if (isReviewsFetching || isAddReviewFetching || isUpdateReviewFetching) {
    return <Loader/>;
  }

  if (isError) {
    return <Error message="Отзывы не найдены."/>;
  }

  return (
    <>
      <ContainerWrapper>
        <Container>
          <Text type="title" color="primary">Отзывы</Text>
          {reviews?.length
            ? <ul className={classes.reviews}>
                {
                  reviews.map((review) => (
                    <li key={review.id}>
                      <Review review={review} onEdit={(review) => setCurrReview({...review})}/>
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
            <Text type="title" color="primary">{currReview ? 'Отредактируйте отзыв' : 'Оставьте отзыв'} </Text>
            <ReviewForm onSubmit={handleSubmitReviewForm} value={currReview} user={user}/>
          </Container>
        </ContainerWrapper>
      }
    </>
  );
}