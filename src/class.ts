// object oriented programming  class -object

class Animal {
  name: string;
  species: string;
  sound: string;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Tommy", "Dog", "Bark");
// console.log(dog.sound); // op: Bark

// dog.makeSound(); // op: The Tommy says Bark
const cat = new Animal("Kitty", "Cat", "Mew Mew");
// console.log(cat.sound); // op: Mew Mew

// parameter properties ==> same class use  without rewrite type duplication

class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string // writing this parameter can avoid the previous iteration
  ) {}
  makeSound() {
    return console.log(`The ${this.name} says ${this.sound}`);
  }
}
const cow = new Animal1("Mohesh", "Cow", "Hamba Hamba");
// cow.makeSound(); // op: The Mohesh says Hamba Hamba
