import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/request-statuses.js";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id]
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({type}) => type.endsWith('/' + REQUEST_STATUS.pending),
        (state, {meta}) => {
          state[meta.requestId] = REQUEST_STATUS.pending;
        }
      )
      .addMatcher(
        ({type}) => type.endsWith('/' + REQUEST_STATUS.fulfilled),
        (state, {meta}) => {
          state[meta.requestId] = REQUEST_STATUS.fulfilled;
        }
      )
      .addMatcher(
        ({type}) => type.endsWith('/' + REQUEST_STATUS.rejected),
        (state, {meta}) => {
          state[meta.requestId] = REQUEST_STATUS.rejected
        }
      )
})

export const { selectRequestStatusById } = requestSlice.selectors;