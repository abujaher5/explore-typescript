// inheritance the first pillar of oop

class Student {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  getAge(numOfHours: number) {
    return console.log(
      `The name of ${this.name} is ${this.age} study time ${numOfHours} hours. `
    );
  }
}
const student = new Student("Rifat", 16, "Chattogram");
student.getAge(6); //  op: The age of Rifat is 16 study time 6 hours.
class Teacher {
  name: string;
  age: number;
  address: string;
  tSubject: string;
  constructor(name: string, age: number, address: string, tSubject: string) {
    (this.name = name),
      (this.age = age),
      (this.address = address),
      (this.tSubject = tSubject);
  }
  getInfo(numOfHours: number) {
    return console.log(
      `The teacher is ${this.name} and his taken class duration ${numOfHours} hours. `
    );
  }
  getSubInfo() {
    return console.log(`${this.name} teaches ${this.tSubject}`);
  }
}
const teacher = new Teacher("Mr. Rasel", 25, "Chattogram", "Physics");
teacher.getInfo(8); //  op: The teacher is Mr. Rasel and his taken class duration 8 hours.
teacher.getSubInfo(); // op: Mr. Rasel teaches Physics

class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  getInfo() {
    return console.log(`The name is ${this.name} age is ${this.age} years. `);
  }
}

// ----  INHERITANCE ----

class Student1 extends Person {}
const student1 = new Student1("Jaher", 24, "Chattogram");
student1.getInfo();

class Teacher1 extends Person {
  tSubject: string;
  constructor(name: string, age: number, address: string, tSubject: string) {
    super(name, age, address);
    this.tSubject = tSubject;
  }

  getSubInfo() {
    return console.log(`${this.name} teaches ${this.tSubject}`);
  }
}
const teacher1 = new Teacher1("Mr. Jaher", 25, "Chattogram", "Physics");
teacher1.getInfo(); // op: The name is Mr. Jaher age is 25 years.
teacher1.getSubInfo(); // Mr. Jaher teaches Physics
