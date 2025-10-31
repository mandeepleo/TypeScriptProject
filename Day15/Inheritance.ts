//** Inheritance and Method Overriding */


class Car{
    name: string;
    model: string;
    color: string;

    constructor(name: string, model: string, color: string){
        this.name = name;
        this.model = model;
        this.color = color;
    }

    startEngine(): void{
        console.log(`${this.name} engine started.`);
    }

    stopEngine(): void{
        console.log(`${this.name} engine stopped.`);
    }

    displayDetails(): void{
        console.log(`Car Details: Name - ${this.name}, Model - ${this.model}, Color - ${this.color}`);
    }
}

class Honda extends Car{ // inheritance
    year: number;
    constructor(name: string, model: string, color: string, year: number){
        super(name, model, color); // calling parent class constructor
        this.year = year;
    }

    startEngine(): void{  // method overriding
        console.log(`Honda engine started.`);
    }

    yom(): void{
        console.log(`Year of Manufacture: ${this.year}`);
    }
}

let myCar = new Honda("Honda Civic", "2022", "Red", 2022);
myCar.startEngine(); // overridden method
myCar.displayDetails(); // inherited method
myCar.yom(); // Honda class method
myCar.stopEngine(); // inherited method 