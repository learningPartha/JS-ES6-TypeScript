var myString = new String();
myString="Hellow";
console.log(myString.length);
console.log(myString.toLowerCase());

var myArray = new Array();
myArray[0] = 25;
myArray[1] = true;
myArray[2] =7;
myArray[3] = "Hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "John";
myCar.drive = function(){
    console.log(myCar.driver+" driving at speed "+myCar.maxSpeed);
};

myCar.drive();

var myCar2 = {
    maxSpeed: 60, 
    driver: "Kayne",
    drive:function(speed,time){
            console.log(myCar2.driver+" drove "+speed*time);
        },
    test:function(){
            console.log(this);
        }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);
myCar2.test();

var myCar3 = {
    maxSpeed: 70, 
    driver: "Shane",
    drive:function(speed,time){
            console.log(this.driver+" drove "+speed*time);
        },
    test:function(){
            console.log(this);
        }
};

myCar3.test();
myCar3.drive(30,4);


var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
            console.log("We drove "+speed*time);
        };
    this.logdriver = function(){
            console.log(this.driver+" has been driving");
        };
};

var myCar = new Car(40,"Tyler");
var myCar2 = new Car(50,"Kayne");
var myCar3 = new Car(60,"John");
var myCar4 = new Car(70,"Lombok");
myCar2.drive(50,5);
myCar3.logdriver();