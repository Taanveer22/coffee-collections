import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setToLocalStorage } from "../utilities";

const CardDetail = () => {
  const [oneCoffee, setOneCoffee] = useState({});
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const { id } = useParams();
  // console.log(id);
  // console.log(typeof id);
  const typeConvertedId = parseInt(id);
  // console.log(typeConvertedId);

  useEffect(() => {
    const foundById = coffeesData.find(
      (coffeItem) => coffeItem.id === typeConvertedId
    );
    setOneCoffee(foundById);
  }, [coffeesData, typeConvertedId]);
  // console.log(oneCoffee);

  const { name, image, making_process } = oneCoffee || {};

  const handleAddToFavourite = (oneCoffee) => {
    setToLocalStorage(oneCoffee);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{making_process}</p>
            <button
              onClick={() => handleAddToFavourite(oneCoffee)}
              className="btn btn-success"
            >
              Add To Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
