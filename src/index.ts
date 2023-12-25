const total: number = 100;
let name: string = "Bob";
const isActiv: boolean = false;

name = "6";

const numbers: number[] = [1, 2, 3, 0];

type User = { 
    name: string; 
    age: number 
};

const user: User = {
    name: "Bob",
    age: 12,
}


// type size = "small" | "medium" | "large";

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large";

// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2, 3);

// type User = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };

type Users = {
    name: string;
    age: number;
    role?: string;
  };
  
  const userss: User = {
    name: "bob",
    age: 12,
  };
  
  const admin: Users = {
    name: "John",
    age: 23,
    role: "Admin",
  };

