"use strict"
let result = document.getElementById("inputext"); //storing the entire input data document in result varaible
// let buttons = document.getElementById("button");    

//to perform action , to calculate


let calculate=(number)=>{
    result.value = result.value + number; 
}
let Result=()=>{
      
    try{
        result.value = eval(result.value)
    }
   catch(err){
    alert("enter the valid input");
   }
}
function clr(){
    result.value = " ";
}
function del(){

    result.value = result.value.slice(0,-1);
}

