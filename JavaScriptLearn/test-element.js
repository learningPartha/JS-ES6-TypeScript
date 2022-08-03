var myContentDivs = document.getElementsByClassName("content");
console.log(myContentDivs);
var mypContent = myContentDivs[0].getElementsByTagName("p");
console.log(mypContent);
//mypContent[0].innerHTML="Yo Ninjas";//change content

var myBody = document.getElementsByTagName("body");
console.log(myBody);
console.log(myBody[0].innerHTML);
//myBody[0].innerHTML = "<p>I am paragraph</p>";
//console.log(myBody[0].innerHTML);

var myTitle = document.getElementById("pagetitle");
console.log(myTitle.textContent);
//myTitle.textContent = "Yo Ninjas! Get Ready!";//change content within tag
//console.log(myTitle.textContent);

var link = document.getElementById("atest");
console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("class","pie");//change attribute property
link.setAttribute("id","hello");
console.log(link.className);
console.log(link.href);//gives exact ref url
console.log(link.style);