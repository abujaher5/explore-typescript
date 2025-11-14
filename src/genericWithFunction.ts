// Generic Function

const createArrayWithString = (value: string) => {
  console.log(typeof value); // op:string
  return [value];
};
// createArrayWithString("hi");
const createArrayWithNumber = (value: number) => {
  console.log(typeof value); // op: number
  return [Number];
};
// createArrayWithNumber(12);

// const createArrayWithUserObject = (value: object) => {
//   console.log(typeof value); op: object
//   return [value];
// };
// createArrayWithUserObject({ name: "k" });

const createArrayWithUserObject = (value: { name: string; age: number }) => {
  // console.log(typeof value);
  return [value];
};

// const arrayOfStr: { name: string; age: number }[] = createArrayWithUserObject({
//   name: "k",
//   age: 12,
// }); // this is infrared automatically

const arrayOfStr = createArrayWithUserObject({
  name: "k",
  age: 12,
});
// console.log(arrayOfStr); //op: [{name:'k',age:12}]

// ---- Create Function With Generic----

const createArrayWithGeneric = <T>(value: T) => {
  return value;
};
const arrString = createArrayWithGeneric("apple");
const arrNumber = createArrayWithGeneric(12);
const arrObject = createArrayWithGeneric({ name: "rasel", id: 123 });
// console.log(arrString, arrNumber, arrObject); // op: apple 12 { name: 'rasel',id: 123 }

// tuple

const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};
const res1 = createArrayTupleWithGeneric("Rasel", false);
// console.log(res1); // op: [ 'Rasel', false ]
const res2 = createArrayTupleWithGeneric(221, { name: "Rasel", id: 123 });
// console.log(res2); // op:[ 221, { name: 'Rasel', id: 123 } ]

// const addStudentToCourse = <T>(studentInfo: T) => {
//   return { course: "Next Level",studentInfo };
// };// can run this but ... is spread operator

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};
const student1 = {
  id: 123,
  name: "Rasel",
  hasPen: true,
};
const student2 = {
  id: 123,
  name: "Jaher",
  hasPen: true,
  isMarried: false,
};

const result1 = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
// console.log(result1, result2);
