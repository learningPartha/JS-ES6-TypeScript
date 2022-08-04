var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mySet = Object(null); //create set
mySet.id = 1; //define and set property
if (mySet.id) { //for set you can check if value exists.
    console.log("id exists");
}
//map
var myMap = Object(null); //create map
myMap.name = "Chandler";
var val = myMap.name; //for map you need to retrieve value
console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]); //if you want to print the map, you need to put the index as string
var ob1 = {};
var ob2 = {};
myMap[ob1] = "World";
console.log(myMap[ob1]);
console.log(myMap[ob2]); //it will give same value
console.log(ob1.toString());
console.log(ob2.toString());
//set
var mySet2 = new Set(); // create new set
mySet2.add("Hello"); //add element
mySet2.add(1);
mySet2.add(1); //can only contain unique value, so ignores this
console.log(mySet2.size);
var ob1 = {};
var ob2 = {};
mySet2.add(ob1);
mySet2.add(ob2);
console.log(mySet2.size);
var newSet = new Set([1, 2, 3, 3, 4, "4", 4]);
console.log(newSet.size);
var chainSet = new Set().add("Hello").add("World"); //chaining adding value
console.log(chainSet);
console.log(newSet.has(1)); //check existence of value
console.log(newSet.has(5));
console.log(newSet.delete("4")); //delete record
console.log(newSet.size);
//weak set
var mySet4 = new Set();
var key = {};
mySet4.add(key);
console.log(mySet4.size);
key = null;
console.log(mySet4.size);
key = __spreadArray([], __read(mySet4), false)[0]; //destruct set
var weakMySet = new WeakSet();
var key2 = {};
weakMySet.add(key2);
console.log(weakMySet.has(key2));
key2 = null; //handles removing reference from memory
//maps
var myMap = new Map();
//set property and value
myMap.set("fname", "Ross");
myMap.set("age", 32);
//retrieve value
console.log(myMap.get("fname"));
console.log(myMap.get("age"));
var ob1 = {};
var ob2 = {};
myMap.set(ob1, 10);
myMap.set(ob2, 20);
myMap.delete("fname");
console.log(myMap.get(ob1));
console.log(myMap.get(ob2));
console.log(myMap.size);
console.log(myMap.has("fname"));
myMap.clear();
console.log(myMap.size);
var myWeakMap = new WeakMap();
var ob1 = {};
myWeakMap.set(ob1, "Hello");
console.log(myWeakMap.get(ob1));
ob1 = null; //key value in map will also become null
//# sourceMappingURL=tutorial-es6-set-map.js.map