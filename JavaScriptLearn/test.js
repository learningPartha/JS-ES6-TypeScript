const users = [
    {
        firstName: "Partha",
        lastName: "Chowdhury",
        age: 26
    },
    {
        firstName: "John",
        lastName: "Snow",
        age: 75
    },
    {
        firstName: "Leonard",
        lastName: "Nimoy",
        age: 50
    },
    {
        firstName: "Gerard",
        lastName: "Butler",
        age: 26
    },
];

//list full name

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

//count of age
const output2 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output2);

//filter first name of age <30

const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output3);

const output4 = users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output4);
