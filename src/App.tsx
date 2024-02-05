import "./App.scss";
import Home from "./pages/Home/Home";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
