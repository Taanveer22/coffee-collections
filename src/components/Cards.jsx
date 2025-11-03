import { useParams } from "react-router-dom";

const Cards = () => {
  const { category } = useParams();
  return (
    <div>
      <h1>cards ... {category}</h1>
    </div>
  );
};

export default Cards;
