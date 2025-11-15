// keyof : type operator

type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle = "bike" | "car" | "cng"; // this is call string literal
type MyVehicle1 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle1 = "bike"; // and 'car' and 'cng' also ok but other vehicle not allowed cause RichPeoplesVehicle has three key only

type User = {
  id: number;
  name: string;
  address: object;
};
const user = {
  id: 123,
  name: "Rasel",
  address: {
    city: "chittagong",
  },
};

// const myId = user.id; // or user["id"]
// const myName = user["name"];
// const address = user["address"].city;
// console.log(myName, address);

const getPropertyFromUser = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromUser(user, "id");

console.log(result1); // op: 123
const product = {
  brand: "Hp",
  model: "notebook",
};

// this is the way to use keyOfConstraint

const result2 = getPropertyFromUser(product, "brand");
// console.log(result2); // op: Hp
