import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE_URL } from "../../../constants/api.js";
import { selectRestaurantMenuById } from "../restaurants/restaurants-slice.js";
import { selectDishesIds } from "./dishes-slice.js";

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (restaurantId, {rejectWithValue}) => {
    const response = await fetch(BASE_URL + API.dishes.getList(restaurantId));
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('dishes/getDishes no data');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, {getState}) => {
      const restaurantDishesIds = selectRestaurantMenuById(getState(), restaurantId);
      const allDishesIds = selectDishesIds(getState());

      return !restaurantDishesIds.every(dishId => allDishesIds.includes(dishId));
    }
  }
)