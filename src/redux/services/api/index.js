import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API, BASE_URL } from "../../../constants/api.js";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ['Reviews'],
  endpoints: (build) => ({
    getRestaurants: build.query({
      query: () => API.restaurants.getList,
    }),
    getDishesByRestaurantId: build.query({
      query: (restaurantId) => API.dishes.getList(restaurantId),
    }),
    getReviewsByRestaurantId: build.query({
      query: (restaurantId) => API.reviews.getList(restaurantId),
      providesTags: (restaurantId) => [{type: 'Reviews', restaurantId}]
    }),
    getUsers: build.query({
      query: () => API.users.getList,
    }),
    getDishById: build.query({
      query: (dishId) => API.dishes.getById(dishId),
    }),
    addReview: build.mutation({
      query: ({restaurantId, review}) => ({
        url: API.reviews.addReview(restaurantId),
        method: "POST",
        body: review
      }),
      invalidatesTags: ({restaurantId}) => [{type: 'Reviews', restaurantId}]
    }),
    updateReview: build.mutation({
      query: ({reviewId, review}) => ({
        url: API.reviews.updateReview(reviewId),
        method: 'PATCH',
        body: review
      }),
      invalidatesTags: ({restaurantId}) => [{type: 'Reviews', restaurantId}]
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useGetDishByIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = apiSlice;