import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getFromLocalStorage, setToLocalStorage } from "../utilities";

const CardDetail = () => {
  const [oneCoffee, setOneCoffee] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);
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
    if (foundById) {
      setOneCoffee(foundById);
    }

    let coffeesList = getFromLocalStorage();
    const isExist = coffeesList.find(
      (coffeeItem) => coffeeItem.id === typeConvertedId
    );
    if (isExist) {
      setIsFavourite(true);
    }
  }, [coffeesData, typeConvertedId]);
  // console.log(oneCoffee);

  const { name, image, making_process } = oneCoffee || {};

  const handleAddToFavourite = (oneCoffee) => {
    setToLocalStorage(oneCoffee);
    setIsFavourite(true);
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
              disabled={isFavourite}
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
