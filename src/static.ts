// static

class Counter {
  count = 0;
  increment() {
    return (this.count = this.count + 1);
  }
  decrement() {
    return (this.count = this.count - 1);
  }
}
const instance1 = new Counter();
// console.log(instance1.increment()); //op: 1
// console.log(instance1.increment()); // 2
// console.log(instance1.increment()); // 3

const instance2 = new Counter();
// console.log(instance2.increment()); // 1
// console.log(instance2.increment()); // 2
// console.log(instance2.increment()); // 3 again counter start from 0
// for this count problem need to use static modifiers
class Counter1 {
  static count = 0;
  increment() {
    return (Counter1.count = Counter1.count + 1);
  }
  decrement() {
    return (Counter1.count = Counter1.count - 1);
  }
}
const instance3 = new Counter1();
// console.log(instance3.increment()); // 1
// console.log(instance3.increment()); // 2
// console.log(instance3.increment()); // 3

const instance4 = new Counter1();
// console.log(instance4.increment()); // 4
// console.log(instance4.increment()); // 5
// console.log(instance4.increment()); // 6
// in this case count is increment accurately

class Counter2 {
  static count = 0;
  static increment() {
    return (Counter2.count = Counter2.count + 1);
  }
  static decrement() {
    return (Counter2.count = Counter2.count - 1);
  }
}
// console.log(Counter2.increment()); // 1
// console.log(Counter2.increment()); //2
// console.log(Counter2.increment()); // 3
// console.log(Counter2.increment()); // 4

// in this case using static keyword on increment and decrement method get the value without creation instance
// console.log(Counter2.decrement()); // -1
// console.log(Counter2.decrement()); // -2
// console.log(Counter2.decrement()); // -3
// console.log(Counter2.decrement()); // -4
