function QueueUsingStacks(array){
   
    let i=0, pushItem;
    let s1 = [];
    let s2 = [];
   
    while(i< array.length){
       
        if(array[i] == 1){
           pushItem = array[i+1]
           s1.push(pushItem);
           
           i = i+2;
        }
        else if(array[i] == 2){
            let pushToNextArray;
           
            while(s1.length != 0){
                s2.push(s1.pop());
            }
           
            console.log(s2.pop());
           
            if(s2.length != 0){
                while(s2.length != 0){
                    s1.push(s2.pop());
                }
            }
            i++;
        } else{
            i++;
        }
       
    }
   
}
 
QueueUsingStacks([1, 2,, 1, 3, 2, 1, 4, 2, 2]);