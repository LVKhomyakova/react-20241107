import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes.js";
import { getDish } from "./get-dish.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({requestStatus: ''}),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDishes.fulfilled, (state, {payload}) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, {payload}) => {
        entityAdapter.setOne(state, payload);
      })
  }
});

export const {
  selectDishesIds,
  selectDishById
} = dishesSlice.selectors;