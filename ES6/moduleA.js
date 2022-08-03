import {greet, GreetMessage} from "./moduleB-classfunc.js"//import function like variable
greet("Hello World");

let gm = new GreetMessage();//create new instance of class
gm.greet();