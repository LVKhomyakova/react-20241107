import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice.js";
import { API, BASE_URL } from "../../../constants/api.js";

export const getRestaurant = createAsyncThunk(
  'restaurants/getRestaurant',
  async (restaurantId, {rejectWithValue}) => {
    console.log(restaurantId);
    const response = await fetch(BASE_URL + API.restaurants.getById(restaurantId));
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('restaurants/getRestaurant no data');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, {getState}) => {
      return !selectRestaurantById(getState(), restaurantId);
    }
  }
)