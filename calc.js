let first="";
let second="";
let operator="";
function appendNumber(num){
    if(operator==="")
    {
        first+=num;
        document.getElementById("result").value=first;
    }
    else{
        second+=num;
        document.getElementById("result").value=first+""+operator+""+second;
    }
}
function setOperator(op)
{
    operator=op;
    document.getElementById("result").value=first+""+operator;
}
function Calc(){
    let result;
    switch(operator)
    {
        case '+':
            result=parseInt(first)+parseInt(second);
            break;
        case '-':
            result=parseInt(first)-parseInt(second);
            break;
        case '*':
            result=parseFloat(first)*parseFloat(second);
            break;
        case '/':
            result=parseFloat(first)/parseFloat(second);
            break;    
    }
    document.getElementById("result").value=result;
}
function Clear()
{
    first="";
    second="";
    operator="";
    document.getElementById("result").value="";
}