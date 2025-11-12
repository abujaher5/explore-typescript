// dynamically generalize : Generic ==> generic with type alias

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
// const friends: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// this 3 type generalize are same.Last one is dynamically generalize

// const rollNumbers: number[] = [1, 2, 3, 4];
// const rollNumbers: Array<number> = [1, 2, 3, 4];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// another use of generics for array
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [10, 10];
const coordinates2: Coordinates<string, string> = ["10", "10"];

// use generic for  array of object

type GenericArray1<T> = Array<T>;

// const userList: GenericArray<object> = [
//   {
//     name: "Mr. X",
//     age: 20,
//   },
//   {
//     name: "Mr. Y",
//     age: 21,
//   },
// ];
const userList: GenericArray1<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 20,
  },
  {
    name: "Mr. Y",
    age: 21,
  },
];
