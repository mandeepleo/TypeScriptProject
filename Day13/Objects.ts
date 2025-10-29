// Different ways to create an oject in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)

// // 1. using 'object' type - Directly define the values for variable (JS/TS)
let employee={
    id:1,
    name:"John",
    age:30,
    getDetails:function():string{
        return `${this.name} is ${this.age} years old.`;
    }
};
console.log("Employee Object key/values and methos/s: ", employee);

// Approach-1: accessing object properties and methods using dot notation
console.log(employee.id, employee.name, employee.age);
console.log(employee.getDetails()); // invoking method

//Approach-2: accessing object properties and methods using bracket notation
console.log(employee['id'], employee['name'], employee['age']);
console.log(employee['getDetails']()); // invoking method

// Modify the object properties using dot notation
employee.age=31;
console.log("After modifying age using dot notation: ", employee.getDetails());

// Modify the object properties using bracket notation
employee['name']="Doe";
console.log("After modifying name using bracket notation: ", employee.getDetails());

//====================================================================================
// 2. Inline Type Object - We also define the datatype of the keys (TS)

let student: {id: number, name: string, age: number, getDetails: ()=>string} = {
    id:2,
    name:"Alice",
    age:22,
    getDetails:function():string{
        return `${this.name} is ${this.age} years old.`;
    }
};
console.log(student.getDetails());
// problem with Inline Type Object approach is we need to define the type every time we create an object with same structure.

//====================================================================================
// 3. Using type aliases (TS): Allows to create custom types

// Creating a type alias 'Laptop' with properties and method
type Laptop={
    name: string,
    price: number,
    getDetails: ()=>string
};
let laptop1: Laptop={
    name:"Macbook Air",
    price:120000,
    getDetails:function():string{
        return `Product name is ${this.name} and price is ${this.price}`;
    }
}
let laptop2: Laptop={
    name:"Dell XPS",
    price:110000,
    getDetails:function():string{
        return `Product name is ${this.name} and price is ${this.price}`;
    }
}

console.log(laptop1.getDetails()); // invoking method
console.log(laptop2.getDetails()); // invoking method

//====================================================================================
// 4. Using the classes

class Person{
    // properties
    id: number;
    name: string;
    age: number;
    // constructor
    constructor(id: number, name: string, age: number){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    // method
    getDetails(): string{
        return `${this.name} is ${this.age} years old.`;
    }
}

let person1=new Person(1, "Bob", 28);
let person2=new Person(2, "Eve", 25);
console.log(person1.getDetails());
console.log(person2.getDetails());

