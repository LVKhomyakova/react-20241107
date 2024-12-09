import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE_URL } from "../../../constants/api.js";
import { selectDishById } from "./dishes-slice.js";

export const getDish = createAsyncThunk(
  'dishes/getDish',
  async (dishId, {rejectWithValue}) => {
    const response = await fetch(BASE_URL + API.dishes.getById(dishId));
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('dishes/getDish no data');
      return;
    }

    return result;
  }, {
    condition: (dishId, {getState}) => {
      return !selectDishById(getState(), dishId);
    }
  }
)