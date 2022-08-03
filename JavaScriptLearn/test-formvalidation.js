var myForm = document.forms.myform;
console.log(myForm);
console.log(myForm.name);
console.log(myForm.name.value);

//call function on focus
myForm.name.onfocus = function () {
    myForm.name.style.border = "4px solid pink";
};

myForm.name.onblur = function () {
    myForm.name.style.border = "";
};

var message = document.getElementById("message");

myForm.onsubmit = function () {
    if(myForm.name.value==""){
        message.innerHTML="Please enter a name";
        return false;
    }else{
        message.innerHTML="";
        return true;
    }
};
