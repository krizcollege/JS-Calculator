// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value === "0" && input === "0") {
        return; // Don't append if both are "0"
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
