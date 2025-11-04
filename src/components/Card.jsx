import { Link, useLocation } from "react-router-dom";
import { TbTrashXFilled } from "react-icons/tb";

const Card = ({ coffeeItem, handleRemoveFromFavourtie }) => {
  const { pathname } = useLocation();
  // console.log(pathname);

  const { id, name, image, category, origin, popularity, rating } =
    coffeeItem || {};

  return (
    <>
      <div className="card bg-base-100 shadow-sm relative">
        <Link to={`/cardDetail/${id}`}>
          <figure>
            <img src={image} className="w-full h-60 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>Origin : {origin}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rating : {rating}</div>
              <div className="badge badge-outline">
                Popularity : {popularity}
              </div>
            </div>
          </div>
        </Link>
        {pathname === "/dashBoard" && (
          <div
            onClick={() => handleRemoveFromFavourtie(id)}
            className="absolute -top-5 -right-5 bg-red-500 p-3 rounded-full"
          >
            <TbTrashXFilled size={30} fontSize={20}></TbTrashXFilled>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
