function greetPerson(name) {
    var greet;
    if (name === "Chandler") {
        //var greet = "Hello Chandler";// if var used then available within function
        greet = "Hello Chandler"; //you cannot redeclare let variable within same scope
    }
    else {
        //var greet = "Hi there";
        //let greet = "Hi there";// if let used then available only within block
        greet = "Hi There";
    }
    console.log(greet);
}
greetPerson("chando");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a); //var updated within block retains the updated value
console.log(b); //let updated within block is only applicable within block
//# sourceMappingURL=tutorial-es5-letvar.js.map