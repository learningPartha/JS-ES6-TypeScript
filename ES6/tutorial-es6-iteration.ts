//iterate map
let myMap = new Map([
    ["fname", "Chandler"],
    ["lname","Bing"]
]);

for(let [key,value] of myMap.entries()){
    console.log(`${key} -> ${value}`);
}

for(let key of myMap.keys()){
    console.log(key);
}

for(let value of myMap.values()){
    console.log(value);
}


//forEach iteration
function arrayFunction(element,index,array){
    console.log("arr["+index+"] = "+element);
};
var numberArr = [2,4,6,8];
numberArr.forEach(arrayFunction);// pass function which will process on each element of array


function mapFunction(value,key,callingMap){
    console.log(key+" "+value);
    console.log(myMap === callingMap);
}
myMap.forEach(mapFunction);

let mySet = new Set([1,2,3]);
function setFunction(value,key,callingSet){
    console.log(key+" "+value);
    console.log(mySet === callingSet);
}
mySet.forEach(setFunction);

