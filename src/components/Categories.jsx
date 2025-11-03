import { Link } from "react-router-dom";

const Categories = ({ categoryLoaderData }) => {
  // console.log(categoryLoaderData);
  // console.log(Array.isArray(categoryLoaderData));

  return (
    <div className="flex justify-center items-center">
      <div role="tablist" className="mt-12 tabs tabs-border">
        {categoryLoaderData.map((categoryElement) => {
          // Debug: Check what category actually is
          console.log("Category value:", categoryElement.category);
          console.log("Category type:", typeof categoryElement.category);

          return (
            <Link
              to={`/categoryType/${categoryElement.category}`}
              key={categoryElement.id}
              role="tab"
              className="tab text-xl font-bold"
            >
              {categoryElement.category}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
