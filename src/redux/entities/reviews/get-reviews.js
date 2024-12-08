import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE_URL } from "../../../constants/api.js";
import { selectRestaurantReviewsById } from "../restaurants/restaurants-slice.js";
import { selectReviewsIds } from "./reviews-slice.js";

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (restaurantId, {rejectWithValue}) => {
    const response = await fetch(BASE_URL + API.reviews.getList(restaurantId));
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('reviews/getReviews no data');
      return;
    }

    return result;
  }, {
    condition: (restaurantId, {getState}) => {
      const restaurantReviewsIds = selectRestaurantReviewsById(getState(), restaurantId);
      const allReviewsIds = selectReviewsIds(getState());

      return !restaurantReviewsIds.every(reviewId => allReviewsIds.includes(reviewId));
    }
  }
)