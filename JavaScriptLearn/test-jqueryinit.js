var myPara = document.getElementById("content").getElementsByTagName("p")[4];
var myPara2 = $("content p:last-child");
console.log(myPara);
console.log(myPara2);
myPara2.addClass("test");
myPara2.fadeIn();