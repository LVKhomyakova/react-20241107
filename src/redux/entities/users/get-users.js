import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE_URL } from "../../../constants/api.js";
import { selectUsersIds } from "./users-slice.js";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, {rejectWithValue}) => {
    const response = await fetch(BASE_URL + API.users.getList);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue('users/getUsers no data');
      return;
    }

    return result;
  }, {
    condition: (_, {getState}) => {
      return !selectUsersIds(getState()).length;
    }
  }
)