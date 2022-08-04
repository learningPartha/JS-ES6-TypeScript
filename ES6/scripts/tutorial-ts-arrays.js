var x = 10;
var y = "hi";
var z = true;
var a = 10;
//enum
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Blue"] = 3] = "Blue";
})(EyeColor || (EyeColor = {}));
;
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
//declar variable with type
var strArr1 = ['Hello', 'World'];
var strArr2 = ['Goodbye', 'Night'];
var anyArr = ['Hello', 10, true];
var myTuple = ["Hi", 10];
console.log(myTuple[0]);
console.log(myTuple[1]);
myTuple[2] = 100;
console.log(myTuple[2]);
//# sourceMappingURL=tutorial-ts-arrays.js.map