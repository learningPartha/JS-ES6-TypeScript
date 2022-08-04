var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
//string template
var user = "Chandler";
var greet = "Welcome 'single' \"double\" ".concat(user, " to ES6\nThis is second line.\nThis is third.. so on\n"); //use backtick to use placeholder for string
// it also includes whitespace, be wary about it
console.log(greet);
//for of statement
var colors = ["Red", "Blue", "Green"];
try {
    for (var colors_1 = __values(colors), colors_1_1 = colors_1.next(); !colors_1_1.done; colors_1_1 = colors_1.next()) {
        var color = colors_1_1.value;
        console.log(color);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (colors_1_1 && !colors_1_1.done && (_a = colors_1.return)) _a.call(colors_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var letters = "ABC";
try {
    for (var letters_1 = __values(letters), letters_1_1 = letters_1.next(); !letters_1_1.done; letters_1_1 = letters_1.next()) {
        var letter = letters_1_1.value;
        console.log(letter);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (letters_1_1 && !letters_1_1.done && (_b = letters_1.return)) _b.call(letters_1);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=tutorial-es6-string-forof.js.map