import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import CoffeeList from "../pages/CoffeeList";
import Dashboard from "../pages/Dashboard";
import Cards from "../components/Cards";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/categoryType/:category",
            element: <Cards></Cards>,
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

export default MyRouter;
