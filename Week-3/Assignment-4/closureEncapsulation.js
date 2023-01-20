/* Refactor the above stack implementation, using the concept of closure, such that there is 
noway to access items array outside of createStack() function scope */

function createStack() { 
    let items = [];

    return {
        push: function(item){
            items.push(item); 
        },  

        pop: function(){
            return items.pop(); 
        }

        // display: function(){
        //     return items;
        // }
    }
 
}
const stack = createStack(); 
stack.push(10); 
stack.push(5); 
// console.log(stack.display());
console.log(stack.pop());// => 5
console.log(stack.items);// => [10] it should be 'undefined'
stack.items= [10,100,1000];// Encapsulation broken!
// console.log(stack.display());

