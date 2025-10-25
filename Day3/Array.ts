let data:Array<number>=[10,20,30,40,50];
function search(arr:Array<number>,target:number):any{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            console.log(`Element ${target} found at index ${i}`);
        }
    }
}
    search(data,30);