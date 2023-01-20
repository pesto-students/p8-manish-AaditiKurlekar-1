/* Write a function called hasDuplicate which accepts an array and returns true or false if that array contains 
a duplicate 

JS function should have Set API implemented. */


const hasDuplicate = arr =>  {
    const set = new Set(arr);
    return set.size!==arr.length
}
console.log(hasDuplicate([1,5,-1,4,1]));
