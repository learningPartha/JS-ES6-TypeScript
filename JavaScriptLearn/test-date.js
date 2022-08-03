var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545,11,2, 10,30,58);//year 1st arg, month 2nd arg, date 3rd arg, then hh, mm, ss
var myFutureDate = new Date(2515,0,31, 04,16,48);

console.log(myPastDate);
console.log(myFutureDate);

var birthDay = new Date(1985,0,15,11,15,25);
var birthDay2 = new Date(1985,0,15,11,15,25);
console.log(birthDay.getMonth());
console.log(birthDay.getFullYear());
console.log(birthDay.getDate());
console.log(birthDay.getDay());
console.log(birthDay.getHours());
console.log(birthDay.getTime());//number of milisecond since Jan 1 ,1970

if(birthDay.getTime()==birthDay2.getTime()){
    console.log("Birthdays are equal");
}else{
    console.log("Birthdays are not equal");
}

if(birthDay==birthDay2){
    console.log("Birthdays are equal");
}else{
    console.log("Birthdays are not equal");
}