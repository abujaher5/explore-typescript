// TS
// primitive data type :  string, number, boolean,  symbol

const firstName: string = "Abu Jaher";
const rollNumber: number = 120;
const isStudent: boolean = true;
const uniqueKey: symbol = Symbol("description");

// spacial data type : any,unknown, undefined, null, never

let v: any = "hello";
v = 12; // no error occur because of type any

let y: undefined = undefined;

let z: null = null;
