import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const CoffeeList = () => {
  const coffeesData = useLoaderData();
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-medium">
          Sort Coffee's by Popularity & Rating
        </h1>
        <div className="space-x-5">
          <button className="btn btn-primary">Sort By Rating</button>
          <button className="btn btn-secondary">Sort By Popularity</button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffeesData.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </>
  );
};

export default CoffeeList;
