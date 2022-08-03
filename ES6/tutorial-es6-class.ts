class Person {
    greet() { }
}
let p = new Person();
console.log(typeof Person);
console.log(p.greet === Person.prototype.greet);

class Person2 {
    constructor(name) {
        this.name = name;
        console.log(this.name + " Constructor")
        //for creating and initializing class, can be only one per class
    }
    static staticMethod(){
        console.log("Static method");
    }
    greetPerson(){
        console.log("Hello "+this.name);
    }
}

let p2 = new Person2("Chandler");//invokes constructor
Person2.staticMethod();//can directly call method without creating object
p2.greetPerson();

class Person3{
    constructor(name){
        this.name = name;
        console.log("Person constructor "+this.name);
    }
    getId(){
        return 10;
    }
}

class Person4 extends Person3{//extends inherits person3 class
    constructor(name){
        super(name);//necessary to initialize parent class constructor before child class
        console.log("Person4 constructor "+this.name);
    }
    getId() {
        return 50;
        //return super.getId();//if you want to return method from parent class
    }
}

let p4 = new Person4("Rachel");
console.log(p4.getId());//if child class do not have this method, it will call parent class method
