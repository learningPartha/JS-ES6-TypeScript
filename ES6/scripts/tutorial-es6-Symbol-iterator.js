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
var _a, e_1, _b;
var s = Symbol("First s");
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3);
var s4 = Symbol.for('RegSymbol'); //add symbol to registry
var s5 = Symbol.for('RegSymbol'); //checks if same symbol exists, if exists returns that object
console.log(s4 === s5);
console.log(Symbol.keyFor(s4)); //returns key for symbol
var fname = Symbol();
var person = (_a = {},
    _a[fname] = "Joey" //set unique value
,
    _a);
console.log(Object.getOwnPropertySymbols(person));
//symbol iterator
//for..of -->Iterator method-->symbol.iterator
var str = "Hello";
var arr = [1, 2, 3];
var num = 5;
var obj = { name: "Chandler" };
console.log("For String " + typeof str[Symbol.iterator]);
console.log("For Array " + typeof arr[Symbol.iterator]);
console.log("For Number " + typeof num[Symbol.iterator]);
console.log("For Object " + typeof obj[Symbol.iterator]);
//iterable //iterator
/*Iterable{
    [Symbol.Iterator]():Iterator
};

Iterator{
    next() :IResultObj
};

IResultObj{
    value: any datatype,
    done: boolean flag indicates if iteration is complete
}*/
var iterable = [1, 2, 3];
function createIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ? { value: array[count++], done: false }
                : { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
//iterate object
var person = {
    fname: "Ross",
    lname: "Geller"
};
person[Symbol.iterator] = function () {
    var _this = this;
    var properties = Object.keys(person);
    var count = 0;
    var isDone = false;
    var next = function () {
        if (count >= properties.length) {
            isDone = true;
        }
        return { value: _this[properties[count++]], done: isDone };
    };
    return { next: next };
};
try {
    for (var person_1 = __values(person), person_1_1 = person_1.next(); !person_1_1.done; person_1_1 = person_1.next()) {
        var p_1 = person_1_1.value;
        console.log(p_1);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (person_1_1 && !person_1_1.done && (_b = person_1.return)) _b.call(person_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=tutorial-es6-Symbol-iterator.js.map