let data:Array<number>=[10,20,30,40,50];
function search(arr:Array<number>,target:number):any{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            console.log(`Element ${target} found at index ${i}`);
        }
    }
}
search(data,30);

//Array with Missing Elements Example:
const food: Array<string | undefined> = ["Pizza", "Burger", ,"Pasta", "Salad", "Sushi"]; // Note the double comma indicating a missing element
console.log(food); // Output: [ 'Pizza', 'Burger', <1 empty item>, 'Pasta', 'Salad', 'Sushi' ]
console.log(food[2]); //Output: undefined

//Number Conversion Examples:
console.log(parseInt("123abc")); //parseInt can convert string to number until it encounters a non-numeric character
console.log(parseFloat("12.34xyz")); //parseFloat can convert string to floating point number until it encounters a non-numeric character
console.log(Number("56.78")); //Number converts the entire string to a number, returns NaN if the string is not a valid number
console.log(Number("abc123")); //NaN because the string is not a valid number

const slicedArray: Array<string | undefined> = food.slice(0,3); //Slicing the array from index 0 to 3
console.log(slicedArray);