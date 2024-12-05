import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addCartItem: (state, {payload}) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeCartItem: (state, {payload}) => {
      if (state[payload] > 1) {
        state[payload] = state[payload] - 1;
        return;
      }
      delete state[payload];
    },
    clearCart: () => ({})
  },
  selectors: {
    selectCartItemCountById: (state, id) => state[id],
  }
});

export const selectCartSlice = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCartSlice],
  (state) => Object.keys(state).reduce((acc, id) => {
    acc.push({ id, count: state[id] });
    return acc;
  }, [])
);


export const selectDishesSlice = (state) => state.dishes;
export const selectCartTotalPrice = createSelector(
  [selectCartSlice,selectDishesSlice],
  (cartState, dishesState) => Object.keys(cartState).reduce((acc, id) => {
    acc+=cartState[id]*dishesState.entities[id].price;
    return acc;
  }, 0)
);

export const { selectCartItemCountById } = cartSlice.selectors;
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

