import { Layout } from "./components/layout/Layout.jsx";
import { AuthContextProvider } from "./contexts/auth-context/auth-context-provider.jsx";
import { ThemeContextProvide } from "./contexts/theme-context/theme-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "./components/pages/restaurant-page/RestaurantPage.jsx";
import { DishList } from "./components/restaurant/dish-list/DishList.jsx";
import { ReviewList } from "./components/restaurant/review-list/ReviewList.jsx";
import { DishPage } from "./components/pages/dish-page/DishPage.jsx";
import { HomePage } from "./components/pages/home-page/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Navigate to='/' />,
    children: [
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantPage />,
        children: [
          {
            path: "menu",
            element: <DishList />,
          },
          {
            path: "reviews",
            element: <ReviewList />,
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