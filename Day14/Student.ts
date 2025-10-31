/**
1. Class
2. Read only Properties
3. Optional property
4. Static varaibles and methods
 **/

class Student{
    name: string;
    age: number;
    readonly id: number; // readonly means id cannot be changed once assigned
    email?: string; // ? means optional property
    static schoolName: string = "ABC High School"; // static property

    constructor(id: number, name: string, age: number, email?: string){ // constructor
        this.id=id;
        this.name=name;
        this.age=age;
        this.email=email;
    }
    
    getDetails():void{ // method
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, school: ${Student.schoolName}`);
        if(this.email){
            console.log(`Email: ${this.email}`);
        }
        else{
            console.log("Email: Not provided");
        }
    }
    static changeSchoolName(newName: string): void {
    Student.schoolName = newName;
}
}

let student1 = new Student(1, "John", 20, "john@icloud.com");
let student2 = new Student(2, "Alice", 22);
student1.getDetails();
student2.getDetails();

// try to modfy readonly property
// student1.id = 5; // This will cause a compile-time error

Student.changeSchoolName("XYZ High School");

console.log("After changing school name:");
student1.getDetails();
student2.getDetails();