import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      {/* banner component */}
      <Banner></Banner>
      {/* heading component */}
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
    </>
  );
};

export default Home;
