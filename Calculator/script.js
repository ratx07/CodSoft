const input = document.querySelector("input");

function append(data){ 
    input.value += data;
}

function clear(){
    input.value = "";
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(error){
        input.value = "Error";
    }
}