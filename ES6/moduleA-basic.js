console.log("Module A log 1");
import {fname as f,lname as l, obj} from "./moduleB-basic.js"//give alias to import
console.log("Module A log 2");
console.log(`${f} ${l}`);
console.log(obj.name);
obj.name= "Ross";
console.log(obj.name);

//import firstname from "./moduleB-default.js" //for default export name may differ
import {default as fs} from "./moduleB-default.js" //for alias for default use curly braces
console.log(fs);