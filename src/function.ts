// Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number) => num1 + num2;
const callFunc = addArrow(2, 100);
console.log(callFunc);
op: 102;

// object => function => which is called method

const normalEmploy = {
  salary: 0,
  giveSalary(money: number): number {
    const totalSalary = this.salary + money;
    return totalSalary;
  },
};
// const payment = normalEmploy.giveSalary(100000);

// loop => function => which is called callback function example
const array: number[] = [1, 2, 3, 4, 5];
const sqrArray = array.map((item: number): number => item * item);
console.log(sqrArray); // op:[1,4,9,16,25]
