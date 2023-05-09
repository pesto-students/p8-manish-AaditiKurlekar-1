/* Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and 
the values are the count of the vowels in the string.

Guidelines:
1.JS function should have Map API implemented.
2.Map’s set functionality should have been used.*/

function isVowel(char) {
    return "aeiou".includes(char);
}
    
function vowelCount(str) {
    const vowelMap=new Map();
    
    for(let char of str){
        let lowerCaseChar=char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('aaditiopq'));