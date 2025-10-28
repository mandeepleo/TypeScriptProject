/*
1. Single Quote - String Literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. backtick (``) - String template - 'When we try to use a string variable inside another sting value ${variable}
// index in string starts with 0
*/

let str1: string = 'this is a string with single quote';
let str2: string = "this is a string with double quote";
let myName: string = "Mandeep";
let str3: string = `Hello, ${myName}. Welcome to TypeScript!`; //Using string template with backticks

console.log(str1);
console.log(str2);
console.log(str3);