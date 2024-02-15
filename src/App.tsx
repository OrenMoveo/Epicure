import "./App.scss";
import Home from "./pages/Home/Home";
import RestaurantDisplayPage from "./pages/RestaurantDisplayPage/RestaurantDisplayPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import AppLayout from "./pages/AppLayout/AppLayout.tsx";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./shared/constants.ts";
import ChefsPage from "./pages/ChefsPage/ChefsPage.tsx";

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
        path: appRoutes.restaurants,
        element: <RestaurantsPage />,
      },
      {
        path: appRoutes.chefs,
        element: <ChefsPage />,
      },
      {
        path: appRoutes.getRestaurantRoute(":id"),
        element: <RestaurantDisplayPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
