/* Create 3 simple functions where call, bind and apply are used. 
The intention of this exercise isto understand how they work and their differences */

//Bind
//Syntax : .bind(thisArgs, param1, ...., paramN)
/* returns the exact copy of a function and binds it with an object. This method is used to bind and
 keep a copy of a method and use it later */

const personInfo = {
    person1 : "Monika",
    person2 : "Rachel",

    fullname : function(relation){
        return this.person1+ " and " + this.person2 + " are " + relation;
    }
}
let info = {
    person1 : "Joey",
    person2 : "Chandler"
}; 
let display = personInfo.fullname.bind(info, "friends");
let display2 = display.bind(info, "friends");
console.log(display());
console.log(display2());

//Call
//Syntax : .call(thisArgs, param1, ...., paramN)
/*if you want to use function with a different objects that has different values, 
you can do so using the call() function*/

const Car = {
    carName : "audi3",
    company : "Audi",

    carInfo : function(){
        return this.carName + " : " + this.company;
    }
}

const carInfo = {
    carName: "city",
    company : "Honda"
}

console.log(Car.carInfo.call(carInfo));

// Apply
//Syntax : .apply(array[])
/* Same as Call() only you can pass multiple parameters in the array and use it */

const airplane = {
    name : "Air India",
    company: "India",
    
    planeInfo : function(pilot1, pilot2){
        return this.name + " : " + this.company + ", Pilots = "+ pilot1 + ", " + pilot2;
    }
}

const planeInfo = {
    name: "Vistara",
    company : "TATA"
}

console.log(airplane.planeInfo.apply(planeInfo, ["Joey", "Ross"]))
