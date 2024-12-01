import { Review } from "./Review.jsx";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/reviews/reviews-slice.js";

export const ReviewContainer = ({id}) => {
  const review = useSelector((state) => selectReviewById(state, id));
  if (!review) return;
  return (<Review review={review}/>)
}