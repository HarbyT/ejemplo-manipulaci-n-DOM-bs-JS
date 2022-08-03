const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#resultadoCalculo');
const sum = document.querySelector('#sum');
const res = document.querySelector('#res');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

//Se agrega a la constante btn el escuchador de eventos para no dejarlo disponible desde el HTML, 
//Garantizando su seguridad.
btn.addEventListener('click', btnOnClick);

//Se realiza una función que en click al botón realizará operaciones
function btnOnClick() {
    let num1 = +input1.value;
    let num2 = +input2.value;
    let resValue = 0;
    
    if(sum.checked){
        resValue = num1 + num2;
        return p.innerText = "El resultado de la suma es " + resValue ;
    } else if (res.checked){
        resValue = num1 - num2;
        return p.innerText = "El resultado de la resta es " + resValue ;
    } else if (mul.checked){
        resValue = num1 * num2;
        return p.innerText = "El resultado de la multiplicación es " + resValue ;
    } else{
        resValue = num1 / num2;
        return p.innerText = "El resultado de la división es " + resValue ;
    }   
}