let obj = {
   
    [Symbol.iterator](){
        let i = 0;
        let n1 = 0;
        let n2 = 1;
        let next_num = 0;
        return{ 
            next() {
                console.log(n1);
                next_num = n1 + n2;
                n1 = n2;
                n2 = next_num;

                i++;
                return{ value : n1 , done : i > 9}
            }
        }
    },
    
}
console.log("The fibonacci series is: ")
for(const el of obj){
    //console.log(el);
}

