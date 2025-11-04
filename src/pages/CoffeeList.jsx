import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const CoffeeList = () => {
  const coffeesData = useLoaderData();
  // 1st step of sorting to declare state
  const [sortedData, setSortedData] = useState([]);

  // 2nd step of sorting to manage side effects
  useEffect(() => {
    setSortedData(coffeesData);
  }, [coffeesData]);

  // 3rd step of sorting to handle the onclick function
  const handleSort = (type) => {
    if (type === "rating") {
      const sorted = [...coffeesData].sort((a, b) => a.rating - b.rating);
      setSortedData(sorted);
    } else if (type === "popularity") {
      const sorted = [...coffeesData].sort(
        (x, y) => y.popularity - x.popularity
      );
      setSortedData(sorted);
    }
  };
  console.log(sortedData);

  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-medium">
          Sort Coffee's by Popularity & Rating
        </h1>
        <div className="space-x-5">
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-primary"
          >
            Sort By Rating
          </button>
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-secondary"
          >
            Sort By Popularity
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </>
  );
};

export default CoffeeList;
