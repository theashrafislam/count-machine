//Subhan Allah
const count1 = document.getElementById('count1');
const btnP1 = document.getElementById('btn1');
const btnN1 = document.getElementById('btn2');
let sum1 = 0;
btnP1.addEventListener('click', function(){
    sum1 = sum1 + 1;
    count1.innerText = sum1;
});
btnN1.addEventListener('click', function(){
    sum1 = sum1 - 1;
    count1.innerText = sum1;
});

//al-Ḥamdu lillāh
const count2 = document.getElementById('count2');
const btnP2 = document.getElementById('btn3');
const btnN2 = document.getElementById('btn4');
let sum2 = 0;
btnP2.addEventListener('click', function(){
    sum2 = sum2 + 1;
    count2.innerText = sum2;
});
btnN2.addEventListener('click', function(){
    sum2 = sum2 - 1;
    count2.innerText = sum2;
});

//Allahu Akbar
const count3 = document.getElementById('count3');
const btnP3 = document.getElementById('btn5');
const btnN3 = document.getElementById('btn6');
let sum3 = 0;
btnP3.addEventListener('click', function(){
    sum3 = sum3 + 1;
    count3.innerText = sum3;
});
btnN3.addEventListener('click', function(){
    sum3 = sum3 - 1;
    count3.innerText = sum3;
});