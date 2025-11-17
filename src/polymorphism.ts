// polymorphism : second pillar of OOP ==>> execute child class method result . don't execute parent class method

class Person {
  getSleep() {
    console.log(`A person need to sleep 8 hours daily.`);
  }
}

class Student extends Person {
  getSleep() {
    console.log("Need to at least 7 hours in exam period ");
  }
}

// const student = new Student();
// student.getSleep(); // op: Need to at least 7 hours in exam period

class Examinee extends Person {
  getSleep() {
    console.log(`Not too much cause need to study.`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person = new Person();
const student = new Student();
const examinee = new Examinee();

// getSleepingHours(person); // op: A person need to sleep 8 hours daily.
// getSleepingHours(student); // op: Need to at least 7 hours in exam period
// getSleepingHours(examinee); // op: Not too much cause need to study.
// same function mechanism give the different result .Thats why this is called polymorphism

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: Number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(1);
const shape3 = new Rectangle(2, 2);
// getArea(shape1); // op: 0
// getArea(shape2); // op: 3.141592653589793
// getArea(shape3); // op: 4
