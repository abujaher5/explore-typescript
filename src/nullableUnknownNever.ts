// null ,unknown, never this three types also primitive type
// nullable type
const getUser = (user: string | null) => {
  if (user) {
    console.log(`User is ${user}`);
  } else console.log("All the user is here");
};
// if someone define the type of null here get all user information
getUser(null);

// unknown type

const discountCalculator = (data: unknown) => {
  if (typeof data === "number") {
    const discountedPrice = data * 0.1;
    console.log(discountedPrice); // op:10
  } else if (typeof data === "string") {
    const [calculateDiscount] = data.split(" ");
    console.log(Number(calculateDiscount) * 0.1); // op:10
  } else {
    console.log("Wrong data");
  }
};
discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

// never

const throwError = (msg: string): never => {
  throw new Error(msg);
  // never means this function never return
};
// throwError("Error...");
