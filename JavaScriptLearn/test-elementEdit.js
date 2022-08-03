//add element
var navli = document.createElement("li");
var newA = document.createElement("a");
var menuDiv = document.getElementById("content").getElementsByTagName("ul")[0];
menuDiv.appendChild(navli);
navli.appendChild(newA);
newA.innerHTML="Blog";
newA.setAttribute("href","a");
//menuDiv.insertBefore(navli,menuDiv.getElementByTagName("li")[0]);

//remove element
var menuP = document.getElementById("content").getElementsByTagName("ul")[0];
var childP = menuP.getElementsByTagName("li")[0];
var removedC = menuP.removeChild(childP);
menuP.appendChild(removedC);
menuP.insertBefore(menuP.getElementsByTagName("li")[0],removedC);