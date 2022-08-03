var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
var getArrowVal = function (n, add) { return 10 * n + add; };
//arrow function //omit parenthesis when argument is single parameter
//omit curly braces when function is single line return;
console.log(getArrowVal(5, 10));
console.log(typeof (getArrowVal));
var employee = {
    id: 1,
    greet: function () {
        // var self = this;
        //setTimeout(function(){console.log(self.id)},1000);
        //setTimeout(()=>{console.log(this.id)},1000);
    }
};
employee.greet();
//default argument
var percentbonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentbonus(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
//rest opertaor - takes variable number of argument
//second argument is going to convert all argument after message to array and loop through it
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of colors";
displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');
//spread operator - takes array and split into indiv element
var colorArr = ['orange', 'yellow', 'indigo'];
displayColors.apply(void 0, __spreadArray([message], colorArr, false)); //send array with spread operator
//# sourceMappingURL=tutorial-es6-argument-arrayfunct.js.map