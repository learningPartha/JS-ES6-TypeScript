for (let i = 1; i <= 5; i++) {
    setTimeout(function () {console.log(i);}, 1000);
}

let num1;
const num2 = 10;//for const you need to initialize while declaring

const obj1={
    name:"Joatmon"
};
console.log(obj1.name);

obj1.name="Chandler";//you can update value of property for const object
console.log(obj1.name);

let a = 5;
let b = 10;

a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);