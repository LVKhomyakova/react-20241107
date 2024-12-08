import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice.js";
import { API, BASE_URL } from "../../../constants/api.js";

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, {rejectWithValue}) => {
    const response = await fetch(BASE_URL + API.restaurants.getList);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('restaurants/getRestaurants no data');
      return;
    }

    return result;
  },
  {
    condition: (_, {getState}) => {
      return !selectRestaurantsIds(getState()).length;
    }
  }
)