function totalCalculate(num){
    let total = document.getElementById('calc-input').value;
    document.getElementById('calc-input').value = total + num;
}
function sum(){
    let sum = document.getElementById('calc-input').value;
    document.getElementById('calc-input').value = eval(sum)
}
function clearAll(){
    document.getElementById('calc-input').value = "";
}