class Person{
    public fname: string;
    public lname: string;
    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }
};

class Person1{
    constructor(public fname:string, public lname:string){
    }
};

interface PersonNat{
    fname: string;
    lname: string;
    age?: number;
}

let employee1Nat: PersonNat = {
    fname: "Chandler",
    lname: "Bing",
    age: 30
}

let employee2Nat: PersonNat = {
    fname: "Ross",
    lname: "Geller"
}

console.log();

