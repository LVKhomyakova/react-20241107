import { Layout } from "./components/layout/Layout.jsx";
import { AuthContextProvider } from "./contexts/auth-context/auth-context-provider.jsx";
import { ThemeContextProvide } from "./contexts/theme-context/theme-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "./components/pages/restaurant-page/RestaurantPage.jsx";
import { DishesPage } from "./components/pages/dishes-page/DishesPage.jsx";
import { ReviewsPage } from "./components/pages/reviews-page/ReviewsPage.jsx";
import { DishPage } from "./components/pages/dish-page/DishPage.jsx";
import { RestaurantsPage } from "./components/pages/restaurants-page/RestaurantsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="restaurants" replace />,
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage/>,
    errorElement: <Navigate to='/' />,
    children: [
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantPage />,
        children: [
          {
            path: "menu",
            element: <DishesPage />,
          },
          {
            path: "reviews",
            element: <ReviewsPage />,
          },
          {
            index: true,
            element: <Navigate to="menu" replace />,
          },
        ],
      }
    ],
  },
  { path: "/dish/:dishId", element: <DishPage/> },
  {
    path: "*",
    element:  <Navigate to='/' />
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvide>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvide>
      </AuthContextProvider>
    </Provider>
  );
}