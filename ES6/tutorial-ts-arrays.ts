var x = 10;
var y = "hi";
var z = true;

var a :number = 10;

//enum
enum EyeColor {Brown=1,Black=2,Blue=3};
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);

//declar variable with type
let strArr1 : string[]=['Hello','World'];
let strArr2 : Array<string> = ['Goodbye','Night'];

let anyArr: any[] = ['Hello',10,true];

let myTuple: [string, number] = ["Hi",10];
console.log(myTuple[0]);
console.log(myTuple[1]);
myTuple[2] = 100;
console.log(myTuple[2]);