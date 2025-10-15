import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import CoffeeList from "../pages/CoffeeList";
import Dashboard from "../pages/Dashboard";
import Categories from "../components/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./categories.json"),
        children: [
          {
            path: "/category",
            element: <Categories></Categories>,
          },
        ],
      },
      {
        path: "/coffeeList",
        element: <CoffeeList></CoffeeList>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
