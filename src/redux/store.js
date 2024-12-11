import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart/cart-slice.js";
import { apiSlice } from "./services/api/index.js";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});

