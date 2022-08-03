var myString = "I\'m \"Fun\" String";
console.log(myString);
console.log(myString.length);
console.log(myString.indexOf("Fun"));
if(myString.indexOf("Fun")===-1){
    console.log("Word Fun is not in string");
}
else{
    console.log("Word Fun at index "+myString.indexOf("Fun"));
}

var string1 = "abc";
var string2 = "ABC";

console.log(string1===string2);
console.log(string1.toLowerCase===string2.toLowerCase);

var string1 = "Abc";
var string2 = "BCd";
console.log(string1<string2);


var str = "hello, world";
var str2 = str.slice(2,9);
console.log(str2);
var str3 = str.slice(2);
console.log(str3);

var tags = "meat,ham,salami,sausage";
var tagArray = tags.split(",");
console.log(tagArray);