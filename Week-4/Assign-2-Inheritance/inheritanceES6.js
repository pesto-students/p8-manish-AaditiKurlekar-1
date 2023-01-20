class Person {
    constructor(name){
        this.name = name;
    }

    teach(subject) {
        console.log(this.name + " is now teaching '" + subject + "'");
    }

}

class Teacher extends Person{

    constructor(name, age){
        super(name);
        this.age = age;
    }

    getAge(){
        console.log("Teacher '" + this.name + "' is " + this.age + " years old");
    }
}

const csTeacher = new Teacher('Monika', 24);
csTeacher.teach('Data Structure');
csTeacher.getAge();
