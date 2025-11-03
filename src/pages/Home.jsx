import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categoryLoaderData = useLoaderData();
  return (
    <>
      {/* banner component */}
      <Banner></Banner>
      {/* heading component */}
      <Heading
        title="Browse Coffees by Category"
        subTitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
      {/* categories tab component */}
      <Categories categoryLoaderData={categoryLoaderData}></Categories>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
