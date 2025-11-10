// Type Alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: number;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Abu",
    lastName: "Jaher",
  },
  gender: "male",
  contactNo: +880183456789,
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};
const user2: User = {
  id: 123,
  name: {
    firstName: "Jamal",
    lastName: "Sheikh",
  },
  gender: "male",
  contactNo: +8801811111111,
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = false;
type Name = string;
const myName: Name = "Rasel";

// type alias in function

type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
