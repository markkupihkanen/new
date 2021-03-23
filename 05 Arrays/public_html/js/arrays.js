/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

// copy and paste here the random number generator function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let numbers = [15, 4, 68, 23, 22, 7, 10, 32, 15];

function t01a() {

}

function t01b() {

}

function t01c() {

}

function t01d() {
    numbers.sort(
            function(a,b) {
                return a-b;
            }
     );       
}

function t01e() {

}

function t01f() {

}

function t02() {  

}

function t03() {
    document.getElementById("lotto").innerHTML = "";
    document.getElementById("extra").innerHTML = "";
    document.getElementById("plus").innerHTML = "";
    
    let lotto = new Array();
    
    for (let i = 0; i <= 40; i++){
        lotto.push(0);
    }
    
    let number = 0;
    while (number < 7){
        let lottonumber = getRndInteger(1, 40);
        if (lotto [lottonumber] === 0) {
            lotto [lottonumber] = 1;
            number++;
        }
    }
    
    number = 0;
     while (number < 1){
        let lottonumber = getRndInteger(1, 40);
        if (lotto [lottonumber] === 0) {
            lotto [lottonumber] = 2;
            number++;
        }
    }
    
    for (let i = 0; i < lotto.length; i++) {
        if (lotto[i] === 1) {
            document.getElementById("lotto").innerHTML += i + " ";
        }
}  
 for (let i = 0; i < lotto.length; i++) {
        if (lotto[i] === 2) {
            document.getElementById("extra").innerHTML += i + " ";
        }

    }
    let plus = getRndInteger(1, 40);
    document.getElementById("plus").innerHTML = plus;
}

function t04() {   
 document.getElementById("random").innerHTML = "";    
let numbers = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];

while (numbers.length > 0) {
    let indeksi = getRndInteger(0, numbers.lenth-1);
    document.getElementById("random").innerHTML += numbers[indeksi] + " ";
    numbers.splice(indeksi, 1);
}
}

