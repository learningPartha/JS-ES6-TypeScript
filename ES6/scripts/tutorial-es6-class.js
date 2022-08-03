var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p = new Person();
console.log(typeof Person);
console.log(p.greet === Person.prototype.greet);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
        console.log(this.name + " Constructor");
        //for creating and initializing class, can be only one per class
    }
    Person2.staticMethod = function () {
        console.log("Static method");
    };
    Person2.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person2;
}());
var p2 = new Person2("Chandler"); //invokes constructor
Person2.staticMethod(); //can directly call method without creating object
p2.greetPerson();
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
        console.log("Person constructor " + this.name);
    }
    Person3.prototype.getId = function () {
        return 10;
    };
    return Person3;
}());
var Person4 = /** @class */ (function (_super) {
    __extends(Person4, _super);
    function Person4(name) {
        var _this = _super.call(this, name) || this;
        console.log("Person4 constructor " + _this.name);
        return _this;
    }
    Person4.prototype.getId = function () {
        return 50;
        //return super.getId();//if you want to return method from parent class
    };
    return Person4;
}(Person3));
var p4 = new Person4("Rachel");
console.log(p4.getId()); //if child class do not have this method, it will call parent class method
//# sourceMappingURL=tutorial-es6-class.js.map