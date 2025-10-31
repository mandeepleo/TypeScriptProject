///***   Constructor Overloading and Method Overloading in TypeScript ****////

///-- Constructor Overloading Example --////

class Calculator{
    constructor() // Default constructor declaration with no parameters
    constructor(a:number, b:number) // Parameterized constructor declaration with two parameters

    constructor(a?:number, b?:number) // Single implementation of constructor handling both cases
    {
        if(a !== undefined && b !== undefined){
            console.log(`Parameterized constructor is invoked; Sum is: ${a + b}`);
        }
        else{
            console.log("Deafult constructor is invoked; Calculator initialized without parameters.");
        }
    }

    add(x: number, y: number): number; // Method signature for two parameters
    add(x: number, y: number, z: number): number; // Method signature for three parameters

    add(x: number, y: number, z?: number): number { // Single implementation handling both cases
        if (z !== undefined) {
            return x + y + z; // If three parameters are provided
        } else {
            return x + y; // If only two parameters are provided
        }
    }

} // end of Calculator class

// c'tor overloading invocations
let calc1 = new Calculator(); // Invokes default constructor
let calc2 = new Calculator(5, 10); // Invokes parameterized constructor

// method overloading invocations
console.log(`Sum of 2 and 3 is: ${calc1.add(2, 3)}`); // Invokes add with two parameters
console.log(`Sum of 2, 3 and 4 is: ${calc1.add(2, 3, 4)}`); // Invokes add with three parameters


