var youLikeMeat = false;
var myNum = 10;
var myAge = 19;
var links = document.getElementsByTagName("a");

/*for(i=1;i<=links.length;i++){
    
    if(i==2||i==3){
        console.log("I continue");
        continue;
    }
    console.log("This is link number "+i);
    if(i==4){
        console.log("I have broken");
        break;
    }
    
    links[i].className = "link-"+i;
}*/

function getAverage(a,b){
    var average = (a+b)/2;
    console.log(average);
    return average;
}

var myAvg = getAverage(2,3);
console.log(myAvg);

var a= "apple";
var b = 5;
if(isNaN(a)){//check if this is number
    console.log("that isn't a number");
}
else{
    console.log("meaning is "+(a*b));
}