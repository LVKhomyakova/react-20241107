import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant )=> {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((restaurant) => restaurant.id),
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  }
});

export const {
  selectRestaurantsIds,
  selectRestaurantById
} = restaurantSlice.selectors;