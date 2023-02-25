"use strict"


let sidebar=document.querySelector(".sidebar");

let closeIcon=document.querySelector(".sidebar .close");

let openIcon=document.querySelector(".sidebar .open");


openIcon.addEventListener("click",function(){
    sidebar.classList.remove("hide");
    this.classList.add("d-none");
    closeIcon.classList.remove("d-none")
})

closeIcon.addEventListener("click",function(){
    sidebar.classList.add("hide");
    this.classList.add("d-none");
    openIcon.classList.remove("d-none")
})