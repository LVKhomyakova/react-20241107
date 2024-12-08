import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({requestStatus: ''}),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, {payload}) => {
        entityAdapter.setMany(state, payload);
      })
  }
});

export const {
  selectReviewsIds,
  selectReviewById
} = reviewsSlice.selectors;