import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/restaurants-slice.js";
import { usersSlice } from "./entities/users/users-slice.js";
import { dishesSlice } from "./entities/dishes/dishes-slice.js";
import { reviewsSlice } from "./entities/reviews/reviews-slice.js";
import { cartSlice } from "./ui/cart/cart-slice.js";
import { requestSlice } from "./ui/request/request.slice.js";

const loggerMiddleware = () => (next) => (action) => {
  console.log(action);
  return next(action);
}

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(loggerMiddleware)
});

