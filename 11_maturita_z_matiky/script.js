let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operator = document.querySelector('#operator');
let result = document.querySelector('#result');
let math = document.querySelector('#math');

num1.value = getRandomInt(100);
num2.value = getRandomInt(100);
operator.selectedIndex = getRandomInt(4);

math.addEventListener('submit', function (e) {

   if (result.value == eval(num1.value + operator.value + num2.value)){
       alert('Gratuluji, máš maturitu z matiky');

   } else{
       alert('Hvězdy září v září');
       e.preventDefault();
   }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}