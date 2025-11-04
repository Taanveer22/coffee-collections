import toast from "react-hot-toast";

// get from ls
const getFromLocalStorage = () => {
  let coffeesList = [];
  const storedCoffeesList = localStorage.getItem("coffeesList");
  if (storedCoffeesList) {
    coffeesList = JSON.parse(storedCoffeesList);
  }
  return coffeesList;
};
// set to ls
const setToLocalStorage = (oneCoffee) => {
  // console.log(oneCoffee);
  let coffeesList = getFromLocalStorage();
  const isExist = coffeesList.find(
    (coffeeItem) => coffeeItem.id === oneCoffee.id
  );
  if (isExist) {
    toast.error("already exist");
  } else {
    coffeesList.push(oneCoffee);
    localStorage.setItem("coffeesList", JSON.stringify(coffeesList));
    toast.success("successfully added");
  }
};
// delete from ls
const deleteFromLocalStorage = (id) => {
  let coffeesList = getFromLocalStorage();
  const remainingList = coffeesList.filter(
    (coffeeItem) => coffeeItem.id !== id
  );
  if (remainingList) {
    localStorage.setItem("coffeesList", JSON.stringify(remainingList));
    toast.success("deleted from dashboard");
  }
};
// export functions all
export { getFromLocalStorage, setToLocalStorage, deleteFromLocalStorage };
