import "./App.scss";
import Home from "./pages/Home/Home";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import Root from "./pages/Root/Root";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./shared/constants.ts";

const router = createBrowserRouter([
  {
    path: appRoutes.base,
    element: <Root />,
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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
