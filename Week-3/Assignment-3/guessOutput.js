// What is the output of the below problem and why

function createIncrement() { 
    let count = 0; 
    
    function increment() { 
        count++; 
    } 
    
    let message = `Count is ${count}`; 
    
    function log() { 
        console.log(message); 
    } 
    
    return [increment, log];
 } 
 
 const [increment, log] = createIncrement(); 
 increment(); 
 increment(); 
 increment(); 
 log();

 /* Output: 'Count is 0'
 destructuring of methods : due to destructuring the methods got separated so even though we increase 
 counter in oner method it is not reflected in another method */