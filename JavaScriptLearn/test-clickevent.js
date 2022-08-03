var title = document.getElementById("pagetitle");
title.onclick = function(){
   alert("You clicked me!");  
};
/*title.onmouseover = function(){
  alert("you hovered over me");  
};*/

var contentmore = document.getElementById("contentmore");
var button = document.getElementById("showmore");

//function to hide or show content on button showmore
button.onclick = function(){
    if(contentmore.className=="open"){
        //shrink box
        contentmore.className="";
        button.innerHTML="Show More";
    }else{
        //expand box
        contentmore.className="open";
        button.innerHTML="Show Less";
    }
};