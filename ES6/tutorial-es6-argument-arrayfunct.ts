var getRegValue = function () {
    return 10;
};

console.log(getRegValue());

const getArrowVal = (n, add) => 10 * n + add;
//arrow function //omit parenthesis when argument is single parameter
//omit curly braces when function is single line return;
console.log(getArrowVal(5, 10));
console.log(typeof (getArrowVal));

var employee = {
    id: 1,
    greet: function () {
        // var self = this;
        //setTimeout(function(){console.log(self.id)},1000);
        //setTimeout(()=>{console.log(this.id)},1000);
    }
};
employee.greet();

//default argument
let percentbonus = () => 0.1;
let getValue = function (value = 10, bonus = value * percentbonus()) {//default value set
    console.log(value + bonus);
    console.log(arguments.length);
}
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);

//rest opertaor - takes variable number of argument
//second argument is going to convert all argument after message to array and loop through it
let displayColors = function (message, ...colors) {//when number of argument is variable
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "List of colors";
displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');

//spread operator - takes array and split into indiv element
let colorArr = ['orange','yellow','indigo'];
displayColors(message,...colorArr);//send array with spread operator
