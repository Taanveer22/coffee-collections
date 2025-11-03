const Card = ({ coffeeItem }) => {
  const { id, name, image, category, origin, popularity, rating } = coffeeItem || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
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
            <div className="badge badge-outline">Popularity : {popularity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
