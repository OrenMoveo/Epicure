import "./App.scss";
import Home from "./pages/Home/Home";
import RestaurantDisplayPage from "./pages/RestaurantDisplayPage/RestaurantDisplayPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./shared/constants.ts";
import ChefsPage from "./pages/ChefsPage/ChefsPage.tsx";
import AllRestaurants from "./pages/RestaurantsPage/AllRestaurants/AllRestaurants.tsx";
import NewRestaurants from "./pages/RestaurantsPage/NewRestaurants/NewRestaurants.tsx";
import OpenNowRestaurants from "./pages/RestaurantsPage/OpenNowRestaurants/OpenNowRestaurants.tsx";
import MostPopularRestaurants from "./pages/RestaurantsPage/MostPopularRestaurants/MostPopularRestaurants.tsx";

const router = createBrowserRouter([
  {
    path: appRoutes.base,
    element: <AppLayout />,
    children: [
      {
        path: appRoutes.base,
        element: <Home />,
      },
      {
        path: appRoutes.restaurants.base,
        element: <RestaurantsPage />,
        children: [
          { path: appRoutes.restaurants.allRestaurants, element: <AllRestaurants /> },
          { path: appRoutes.restaurants.newRestaurants, element: <NewRestaurants /> },
          { path: appRoutes.restaurants.openNowRestaurants, element: <OpenNowRestaurants /> },
          { path: appRoutes.restaurants.mostPopularRestaurants, element: <MostPopularRestaurants /> },
        ],
      },
      {
        path: appRoutes.chefs.base,
        element: <ChefsPage />,
      },
      {
        path: appRoutes.restaurants.getRestaurantRoute(":id"),
        element: <RestaurantDisplayPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
