import { NavLink } from "react-router-dom";

const Categories = ({ categoryLoaderData }) => {
  // console.log(categoryLoaderData);
  // console.log(Array.isArray(categoryLoaderData));

  return (
    <div className="flex justify-center items-center">
      <div role="tablist" className="mt-12 tabs tabs-border">
        {categoryLoaderData.map((categoryElement) => {
          // Debug: Check what category actually is
          // console.log("Category value:", categoryElement.category);
          // console.log("Category type:", typeof categoryElement.category);

          return (
            <NavLink
              to={`/categoryType/${categoryElement.category}`}
              key={categoryElement.id}
              role="tab"
              className={({ isActive }) =>
                isActive
                  ? "tab tab-active text-lg font-medium"
                  : "tab text-lg font-medium"
              }
            >
              {categoryElement.category}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
