console.log(typeof []);
const user = {
  name: "Pedro",
  getName: () => {},
};
console.log(user.getName());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName = () => this.name;
  getAge = () => this.age;
}

let Person1 = new Person("Pedro", 19);
let Person2 = new Person("Omar Razi", 34);

console.log(Person2.getName());
