// type assertion ==> when something is clear that we know this is a valid type of this and typescript can't identify the type then use type assertion

let anything: any;

anything = "Rasel";

anything as string;

console.log(typeof anything); // op: string
console.log(anything.toUpperCase()); // op: RASEL
console.log((anything as string).toUpperCase()); // op: RASEL

const kgToGramConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const conversion = input.split(" ");
    // const result = conversion[0];
    const [result] = conversion;
    console.log(typeof result);
    return `Converted output is : ${Number(result) * 1000}`;
    // return Number(result) * 1000; // for this output turns into number
  } else {
    return "Wrong Input";
  }
};
// const result1 = kgToGramConverter(2);
const result1 = kgToGramConverter(2) as number;
const result2 = kgToGramConverter("2 kg") as string;
// now result1.number method and result2.string method
console.log(result1, result2); // op: 2000, 2000 both are number
