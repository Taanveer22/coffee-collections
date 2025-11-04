import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import CoffeeList from "../pages/CoffeeList";
import Dashboard from "../pages/Dashboard";
import AllCards from "../components/AllCards";
import CardDetail from "../components/CardDetail";

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
            path: "/",
            element: <AllCards></AllCards>,
            loader: () => fetch("/coffees.json"),
          },
          {
            path: "/categoryType/:category",
            element: <AllCards></AllCards>,
            loader: () => fetch("/coffees.json"),
          },
        ],
      },
      {
        path: "/cardDetail/:id",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/coffeeList",
        element: <CoffeeList></CoffeeList>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default MyRouter;
