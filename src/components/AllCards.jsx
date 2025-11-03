import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const AllCards = () => {
  const { category } = useParams();
  // console.log(category);
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const filteredByCategory = [...coffeesData].filter(
      (coffeeItem) => coffeeItem.category === category
    );
    setCoffees(filteredByCategory);
  }, [coffeesData, category]);
  // console.log(coffees);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
