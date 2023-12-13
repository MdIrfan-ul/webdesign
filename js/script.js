function display_value(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function cleardisplay(){
    document.getElementById("display").value=""
}
function calculate(){
    document.getElementById("display").value;
    var userInput=document.getElementById("display").value;
    var result=eval(userInput);
    
    document.getElementById("display").value=result;
}
