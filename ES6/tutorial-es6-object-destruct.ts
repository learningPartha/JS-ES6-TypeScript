let firstName = "Chandler";
let lastName = "Bing";
let person = {
    firstName: firstName,
    lastName: lastName
};//default way to create object using object literal

console.log(person.firstName);
console.log(person.lastName);

let person2 = {
    firstName, lastName
};//if variable and object property has same name
console.log(person2.firstName);
console.log(person2.lastName);

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName, lastName, fullName,
        //isSenior:function(){
        isSenior() {// if function returns only one statement, you can remove function() literal, replace with ()
            return age > 60;
        }
    };
}

let p = createPerson("Ross", "Geller", 32);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());

//if proeprty of object is space separated, instead of . use [] with parameter name
let ln = "last name";
let person3={
    "first name":"Rachel",
    [ln]: "Green"
};
console.log(person3);

//destruct array
let employee = ["Joey","Tribianni","Male"];
let [fname,lname,gender] = employee;
console.log(fname,lname,gender);

let[firstN,...elements]=employee;
console.log(firstN,elements);

let employee2 = ["Joey","Tribianni",];
let[fn2,ln2,gender2="M"] = employee2;
console.log(fn2,ln2,gender2);

//destruct object
let empObj = {
    firstName: "Pheobe",
    lastName: "Buffey",
    gender: "Female"
};

let {firstName:fn3,lastName:ln3,gender:g} = empObj;//create alias
console.log(fn3,ln3,g);