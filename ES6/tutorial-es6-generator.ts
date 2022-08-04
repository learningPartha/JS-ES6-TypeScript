//generator
function *createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

let person ={
    fname: "Monica",
    lname: "Geller"
};

person[Symbol.iterator] = function*(){
    let properties = Object.keys(person);
    for(let t of properties){
        yield this[t];
    }
};

for (let p of person){
    console.log(p);
}