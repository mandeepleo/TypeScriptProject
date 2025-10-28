console.log("Welcome to TypeScript");
console.log("This is Day 2 - Variables in TypeScript");
var age:number=30;
var firstName:string="Mandeep";
console.log("My name is "+firstName+" and I am "+age+" years old");
let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number

function varScope(){        // function scope
    if(true){
        var msg="Hello world!";
        //console.log(msg);
    }
    console.log(msg);
}

varScope(); // call the function

const pi=3.14;
console.log("Value of pi is "+pi);

