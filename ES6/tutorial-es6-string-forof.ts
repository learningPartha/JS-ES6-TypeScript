//string template
let user = "Chandler";
let greet = `Welcome 'single' "double" ${user} to ES6
This is second line.
This is third.. so on
`;//use backtick to use placeholder for string
// it also includes whitespace, be wary about it
console.log(greet);

//for of statement
let colors = ["Red","Blue","Green"];
for(let color of colors){
    console.log(color);
}

let letters = "ABC";
for(let letter of letters){
    console.log(letter);
}