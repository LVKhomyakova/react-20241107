import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users.js";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({requestStatus: ''}),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, {payload}) => {
        entityAdapter.setMany(state, payload);
      })
  }
});

export const {
  selectUsersIds,
  selectUserById
} = usersSlice.selectors;