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
var _a;
var firstName = "Chandler";
var lastName = "Bing";
var person = {
    firstName: firstName,
    lastName: lastName
}; //default way to create object using object literal
console.log(person.firstName);
console.log(person.lastName);
var person2 = {
    firstName: firstName,
    lastName: lastName
}; //if variable and object property has same name
console.log(person2.firstName);
console.log(person2.lastName);
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        //isSenior:function(){
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 32);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
//if proeprty of object is space separated, instead of . use [] with parameter name
var ln = "last name";
var person3 = (_a = {
        "first name": "Rachel"
    },
    _a[ln] = "Green",
    _a);
console.log(person3);
//destruct array
var employee = ["Joey", "Tribianni", "Male"];
var _b = __read(employee, 3), fname = _b[0], lname = _b[1], gender = _b[2];
console.log(fname, lname, gender);
var _c = __read(employee), firstN = _c[0], elements = _c.slice(1);
console.log(firstN, elements);
var employee2 = ["Joey", "Tribianni",];
var _d = __read(employee2, 3), fn2 = _d[0], ln2 = _d[1], _e = _d[2], gender2 = _e === void 0 ? "M" : _e;
console.log(fn2, ln2, gender2);
//destruct object
var empObj = {
    firstName: "Pheobe",
    lastName: "Buffey",
    gender: "Female"
};
var fn3 = empObj.firstName, ln3 = empObj.lastName, g = empObj.gender; //create alias
console.log(fn3, ln3, g);
//# sourceMappingURL=tutorial-es6-object-destruct.js.map