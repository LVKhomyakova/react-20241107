import { createSelector, createSlice } from "@reduxjs/toolkit";
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
    selectRestaurantMenuById: (state, id) => state.entities[id]?.menu || [],
    selectRestaurantReviewsById: (state, id) => state.entities[id]?.reviews || [],
  }
});

export const selectRestaurantsSlice = (state) => state.restaurants;
export const selectRestaurantMenuItems = createSelector(
  [selectRestaurantsSlice],
  (state) => state.ids.map((id) => {
      return {
        id,
        name: state.entities[id].name,
        path: `/restaurants/${id}`,
      };
    }
  )
)


export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantMenuById,
  selectRestaurantReviewsById,
} = restaurantSlice.selectors;