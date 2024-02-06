import "./App.scss";
import Home from "./pages/Home/Home";
import RestaurantDisplayPage from "./pages/RestaurantDisplayPage/RestaurantDisplayPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import Root from "./pages/Root/Root";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
      },
      {
        path: "/chefs",
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDisplayPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
