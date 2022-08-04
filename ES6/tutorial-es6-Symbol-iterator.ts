let s = Symbol("First s");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");
console.log(s2===s3);

let s4 = Symbol.for('RegSymbol');//add symbol to registry
let s5 = Symbol.for('RegSymbol');//checks if same symbol exists, if exists returns that object
console.log(s4===s5);
console.log(Symbol.keyFor(s4));//returns key for symbol

let fname = Symbol();
let person = {
    [fname]: "Joey" //set unique value
};
console.log(Object.getOwnPropertySymbols(person));

//symbol iterator
//for..of -->Iterator method-->symbol.iterator

let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj ={ name : "Chandler"};
console.log("For String "+typeof str[Symbol.iterator]);
console.log("For Array "+typeof arr[Symbol.iterator]);
console.log("For Number "+typeof num[Symbol.iterator]);
console.log("For Object "+typeof obj[Symbol.iterator]);

//iterable //iterator
/*Iterable{
    [Symbol.Iterator]():Iterator
};

Iterator{
    next() :IResultObj
};

IResultObj{
    value: any datatype,
    done: boolean flag indicates if iteration is complete
}*/

let iterable = [1,2,3];
function createIterator(array){
    let count = 0;
    return{
        next: function(){
            return count<array.length ? {value: array[count++], done:false}
            :{value:undefined, done:true};
        }
    }
}

let myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

//iterate object
let person ={
    fname: "Ross",
    lname: "Geller"
};
person[Symbol.iterator] =  function(){
    let properties = Object.keys(person);
    let count = 0 ;
    let isDone = false;
    let next = () =>{
        if(count>=properties.length){
            isDone = true;
        }
        return {value: this[properties[count++]],done: isDone};
    };
    return {next};
}

for (let p of person){
    console.log(p);
}