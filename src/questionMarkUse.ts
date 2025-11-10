// 1. ? : ternary operator : decision making

const eligibleForVote = (age: number) => {
  if (age >= 18) {
    console.log("You are eligible");
  } else {
    console.log("You are not eligible"); // op: You are not eligible
  }
};
// eligibleForVote(17);
const eligibleForVote1 = (age: number) => {
  const result = age >= 18 ? "You are eligible" : "You are not eligible";
  return result;
};
// console.log(eligibleForVote1(19)); op:You are eligible

// 2. ?? : nullish coalescing operator : applicable for (null / undefined)

const userTheme = undefined; // also work for null
const selectedTheme = userTheme ?? "Light Theme";
// console.log(selectedTheme); //op: Light Theme
const isAuthenticated = undefined;
const resultWithTernary = isAuthenticated
  ? "Yor are welcome"
  : "You are guest !!";
const resultWithNullish = isAuthenticated ?? "You are guest !";

// 3. ?. use for optional chaining

const user: {
  address: { city: string; town: string; postalCode?: string };
} = {
  address: {
    city: "Dhaka",
    town: "Main Town",
    // using optional chain like ? postalCode?: string that's why no error occur .
  },
};

const postalCode = user?.address?.postalCode; // here also ? for optional chaining.  op: undefined but not crush for using optional chaining
