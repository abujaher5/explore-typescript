// array , object

let bazarList: string[] = ["potato", "egg", "salt", "sugar", "rice"];
// bazarList.push(true); // error because bazarList array type is string

let mixedArr: (string | number)[] = ["eggs", 12, "milk"];
mixedArr.push(14); // no error occur

// tuple
let nameAndRoll: [string, number] = ["Mirza", 120];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 4];
