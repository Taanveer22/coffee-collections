import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const AllCards = () => {
  const { category } = useParams();
  console.log(category);
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  return (
    <div>
      <h1>cards ... {category}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffeesData.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
