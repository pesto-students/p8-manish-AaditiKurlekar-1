/*Create a memoize function that remembers previous inputs and stores them in cache so that it won’t 
have to compute the same inputs more than once. The function will take an unspecifiednumber of integer 
inputs and a reducer method.
*/

function memoise(fn){
    const cache = new Map();
    console.log(fn);
    return function(...args){
        console.log(args);
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

function addition(a,b){
    console.log(a+b) 
    return a+b;
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}
const memoiseAdd = memoise(addition);

time(() => memoiseAdd(100,100));
time(() => memoiseAdd(100,100));
time(() => memoiseAdd(200,300));
time(() => memoiseAdd(200,300));
time(() => memoiseAdd(200,250));
time(() => memoiseAdd(200,250));
time(() => memoiseAdd(200,250));
time(() => memoiseAdd(200,250));
time(() => memoiseAdd(1000,3000));
time(() => memoiseAdd(1000,3000));
time(() => memoiseAdd(1000,3000));




