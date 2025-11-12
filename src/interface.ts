// interface like thing did by type alias
type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

const user1: User = {
  name: "Mr. X",
  age: 30,
};
const user2: User & Role = {
  name: "Mr. Y",
  age: 35,
  role: "user",
};

type UserWithRole = User & Role;
const user3: UserWithRole = {
  name: "Mr. Z",
  age: 20,
  role: "admin",
};

// ----- USING INTERFACE ---- //

interface IUser {
  name: string;
  age: number;
}
const user4: IUser = {
  name: "Mr. A",
  age: 35,
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = false; // we can't do this with interface .That is why interface works only object type data : array,object and function

// extend IUser type using interface extends keyword and then { write extended type here}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user5: IUserWithRole = {
  name: "Mr. B",
  age: 20,
  role: "admin",
};

// using interface on function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

console.log(add(2, 3)); // op: 5

interface IAdd {
  (num1: number, num2: number): number;
}
const add1: IAdd = (num1, num2) => num1 + num2;
console.log(add1(2, 3)); // op: 5

// using interface on array

type Friends = string[];
const friends: Friends = ["A", "B", "C"];
interface IFriends {
  [index: number]: string;
  // indexing of array
}
const iFriends: IFriends = ["a", "b", "c"];

// best is use interface for object and type for everything.
