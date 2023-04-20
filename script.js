/* Declare variables below to save the different sections (divs) of your story*/









 
let optionOneEnd= document.querySelector(".option-one-end")
let optionTwoEnd= document.querySelector(".option-two-end")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let reset = document.querySelector(".reset")

optionOne.onclick=function(){
    optionOneScreen.style.display="block"
    optionOneEnd.style.display="block"
};

optionTwo.onclick=function(){
    optionTwoScreen.style.display="block"
    optionTwoEnd.style.display="block"
};


reset.onmouseover=function(){
 optionOneScreen.style.display="none"
    optionOneEnd.style.display="none"
  optionTwoScreen.style.display="none"
    optionTwoEnd.style.display="none"
};


