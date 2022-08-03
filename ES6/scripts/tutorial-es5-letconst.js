var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
var num1;
var num2 = 10; //for const you need to initialize while declaring
var obj1 = {
    name: "Joatmon"
};
console.log(obj1.name);
obj1.name = "Chandler"; //you can update value of property for const object
console.log(obj1.name);
var a = 5;
var b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
//# sourceMappingURL=tutorial-es5-letconst.js.map