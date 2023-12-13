let sum_expression='';
function addExpression(expression){
    sum_expression=sum_expression+expression;
    document.querySelector(".p-display").innerHTML = sum_expression;

}
function calculate(){
    let result = eval(sum_expression);
    document.querySelector(".p-display").innerHTML = result;
}
function clearDisplay(){
    sum_expression='';
    document.querySelector(".p-display").innerHTML = sum_expression;
}
