function Person(name){
    this.name = name;
}

Person.prototype.teach = function(subject){
    console.log(this.name + " is now teaching '" + subject + "'");
}

function Teacher(name, age){
    Person.call(this, name);
    this.age = age;
}

Teacher.prototype.getAge = function(){
    console.log("Teacher '" + this.name + "' is " + this.age + " years old");
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const csTeacher = new Teacher('Phoebe', 25);
csTeacher.teach('OOP');
csTeacher.getAge();

