const form = document.getElementById('form2');
const name = document.getElementById('name2');
const error = document.getElementById('error2');
const nameRegExp = /^[a-zA-Z]+$/;
var inputStatus = "invalid";

name.addEventListener('input', event => {
    displayError();
});


form.addEventListener('submit', event => {
    displayError();
    if(inputStatus === "invalid" ){
    event.preventDefault();}
});


function displayError(){
    inputStatus = "invalid";
    if(name.value.trim().length === 0){
    error.innerHTML = "Name is required";
    name.className = "invalid";}
    else if(!nameRegExp.test(name.value.trim())){
    error.innerHTML = "Name should contain only letters";
    name.className = "invalid";}
    else if(name.value.trim().length < 3){
    error.innerHTML = "Name should contain at least 3 letters";
    name.className = "invalid";}
    else if(name.value.trim().length > 15){
    error.innerHTML = "Name should contain at most 15 letters";
    name.className = "invalid";}
    else{
    inputStatus = "valid";
    error.innerHTML = "";
    name.className = "valid";
   }
}