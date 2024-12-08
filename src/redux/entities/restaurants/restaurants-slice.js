import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({requestStatus: ''}),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantMenuById: (state, id) => state.entities[id]?.menu || [],
    selectRestaurantReviewsById: (state, id) => state.entities[id]?.reviews || [],
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
      entityAdapter.setMany(state, payload);
    })
});

export const selectRestaurantsSlice = (state) => state.restaurants;
export const selectRestaurantNavItems = createSelector(
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