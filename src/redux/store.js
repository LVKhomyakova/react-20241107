import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/restaurants-slice.js";
import { usersSlice } from "./entities/users/users-slice.js";
import { dishesSlice } from "./entities/dishes/dishes-slice.js";
import { reviewsSlice } from "./entities/reviews/reviews-slice.js";

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
  },
});