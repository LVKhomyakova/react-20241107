import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedReviews.reduce((acc, review )=> {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map((review) => review.id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  }
});

export const {
  selectReviewsIds,
  selectReviewById
} = reviewsSlice.selectors;