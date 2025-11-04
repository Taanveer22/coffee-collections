import { useEffect, useState } from "react";
import { deleteFromLocalStorage, getFromLocalStorage } from "../utilities";
import Card from "../components/Card";
import Heading from "../components/Heading";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    let coffeesList = getFromLocalStorage();
    setCoffees(coffeesList);
  }, []);
  // console.log(coffees);
  const handleRemoveFromFavourtie = (id) => {
    deleteFromLocalStorage(id);
    let coffeeList = getFromLocalStorage();
    setCoffees(coffeeList);
  };
  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subTitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      ></Heading>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {coffees.map((coffeeItem) => (
          <Card
            key={coffeeItem.id}
            coffeeItem={coffeeItem}
            handleRemoveFromFavourtie={handleRemoveFromFavourtie}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
