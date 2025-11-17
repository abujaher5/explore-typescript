// type guard

// in typeof

type AlphaNumeric = number | string;
const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(2, 2)); // op: 4
// console.log(add(2, "2")); // op: 22
// console.log(add("2", "2")); // op: 22

// in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(
      `This user name is ${user.name} and his role is : ${user.role}`
    );
  } else {
    console.log(`User name is ${user.name}`);
  }
};
// getUserInfo({ name: "Normal" });  // op: User name is Normal
// getUserInfo({ name: "Normal", role: "Admin" }); // op: This user name is Normal and his role is : Admin

// ----  INSTANCE OF TYPE GUARD  ----

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} daily sleep ${numOfHours} hours.`);
  }
}
class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(
      `Student name ${this.name} and his daily study time is ${numOfHours} `
    );
  }
}
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} take class daily ${numOfHours} hours.`);
  }
}

const getUserInfo1 = (user: Person) => {
  if (user instanceof Student) {
    user.doStudy(8);
  } else if (user instanceof Teacher) {
    user.takeClass(6);
  } else {
    user.getSleep(7);
  }
};
const student = new Student("Mr. Student");
const teacher = new Teacher("Mr. Teacher");
const person = new Person("Mr. Person");
getUserInfo1(student); // op: Student name Mr. Student and his daily study time is 8.
getUserInfo1(teacher); // op: Mr. Teacher take class daily 6 hours.
getUserInfo1(person); // op: Mr. Person daily sleep 7 hours.

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

const getUserInfo2 = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(8);
  } else if (isTeacher(user)) {
    user.takeClass(6);
  } else {
    user.getSleep(7);
  }
};
