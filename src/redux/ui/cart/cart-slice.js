import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addCartItem: (state, {payload}) => {
      state[payload.id] = {
        count: (state[payload.id]?.count || 0) + 1,
        price: payload.price,
    };
    },
    removeCartItem: (state, {payload}) => {
      if (state[payload].count > 1) {
        state[payload] = {
          ...state[payload],
          count: state[payload]?.count - 1
        };
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

export const selectCartTotalPrice = createSelector(
  [selectCartSlice],
  (cartState) => Object.keys(cartState).reduce((acc, id) => {
    acc+= cartState[id].count * cartState[id].price;
    return acc;
  }, 0)
);

export const { selectCartItemCountById } = cartSlice.selectors;
export const {
  addCartItem,
  removeCartItem,
  clearCart
} = cartSlice.actions;

