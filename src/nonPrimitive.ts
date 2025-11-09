// array , object

let bazarList: string[] = ["potato", "egg", "salt", "sugar", "rice"];
// bazarList.push(true); // error because bazarList array type is string

let mixedArr: (string | number)[] = ["eggs", 12, "milk"];
mixedArr.push(14); // no error occur

// tuple
let nameAndRoll: [string, number] = ["Mirza", 120];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 4];

// reference type : object
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Abu",
  middleName: "Jaher",
  lastName: "Rasel",
};
const user1: {
  firstName: string;
  middleName?: string; // ? means middleName is optional.
  lastName: string;
  isStudent: boolean;
  organization: "Programming Hero"; // "Programming Hero" is a value type : literal types
} = {
  organization: "Programming Hero",
  firstName: "Abu",
  lastName: "Jaher",
  isStudent: true,
};
// user1.organization="Next Level Web Dev"  // error occur => literal type

const user2: {
  firstName: string;
  middleName?: string; // ? means middleName is optional.
  lastName: string;
  isStudent: boolean;
  readonly organization: string; // readonly => access modifier immutable
} = {
  organization: "Programming Hero",
  firstName: "Abu",
  lastName: "Jaher",
  isStudent: true,
};

// user2.organization = "Programming Hero"; // error occur cause readonly access modifier is immutable
