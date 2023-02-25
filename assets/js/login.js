"use strict"


function errorMessage(e) {
    let error = document.getElementById("errorEmail")
    if (error.innerHTML==""){
        error.textContent = "Please enter email";
        error.style.color = "red";
        error.style.display="block";
       
    } 
    
    else {
        error.textContent = ""
    }
}

function errorMessage2() {
    let error = document.getElementById("errorPassword")
    if (error.innerHTML==""){
        error.textContent = "Please enter password";
        error.style.color = "red";
        error.style.display="block";

    } 
    else {
        error.textContent = ""
    }
}


let emailInput=document.querySelector(".login .email");

let passwordInput=document.querySelector(".login .password");

emailInput.addEventListener("keyup",function(e){
    if(e.keyCode===13){
        document.querySelector("button").click();
    }
})


passwordInput.addEventListener("keyup",function(e){
    if(e.keyCode===13){
        document.querySelector("button").click();
    }
})

document.querySelector("button").addEventListener("click",function(e){
    alert("success")
})

