export const BASE_URL = "http://localhost:3001";

export const API = {
  restaurants: {
    getList: '/api/restaurants',
    getById: (id) => '/api/restaurant/' + id,
  },
  dishes: {
    getList: (restaurantId) => '/api/dishes?restaurantId=' + restaurantId,
    getById: (dishId) => '/api/dish/' + dishId,
  },
  reviews: {
    getList: (restaurantId) =>  '/api/reviews?restaurantId=' + restaurantId,
    addReview: (restaurantId) => '/api/review/' + restaurantId,
    updateReview: (reviewId) => '/api/review/' + reviewId,
  },
  users: {
    getList: '/api/users/'
  }
}