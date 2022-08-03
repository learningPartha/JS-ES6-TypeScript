//string template
var user = "Chandler";
var greet = "Welcome 'single' \"double\" ".concat(user, " to ES6\nThis is second line.\nThis is third.. so on\n"); //use backtick to use placeholder for string
// it also includes whitespace, be wary about it
console.log(greet);
//for of statement
var colors = ["Red", "Blue", "Green"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var letters = "ABC";
for (var _a = 0, letters_1 = letters; _a < letters_1.length; _a++) {
    var letter = letters_1[_a];
    console.log(letter);
}
//# sourceMappingURL=tutorial-es6-string-forof.js.map