import { Link } from "react-router-dom";

const Categories = ({ categoryLoaderData }) => {
  console.log(categoryLoaderData);
  return (
    <>
      <div role="tablist" className="mt-12 tabs tabs-border">
        {categoryLoaderData.map((categoryElement) => (
          <Link key={categoryElement.id} role="tab" className="tab">
            {categoryElement.category}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
