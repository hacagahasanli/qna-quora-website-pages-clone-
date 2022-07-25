let container = document.getElementById("popUpAskingQuestion");
let container2 = document.getElementById("popUpAskingQuestion");
let profileContainer = document.querySelector(".profileContaniner");
let container3 = document.querySelector(".container3");
let mainContainer = document.querySelector(".mainContainer");


function openPage(){

    container.classList.add("popUpDislayBlock");
    mainContainer.classList.add("changeOpacity");
    container3.classList.add("changeOpacity");
}

function dersOlsun(){

    container2.classList.add("popUpDislayBlock");
    profileContainer.classList.add("changeOpacity");
    container3.classList.add("changeOpacity");

}

function derdiCixar(){

    container.classList.remove("popUpDislayBlock");
    profileContainer.classList.remove("changeOpacity");
    container3.classList.remove("changeOpacity");

}

function closePage(){

    container.classList.remove("popUpDislayBlock");
    mainContainer.classList.remove("changeOpacity");
    container3.classList.remove("changeOpacity");

}




