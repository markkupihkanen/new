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

function t01() {
    let input_name = document.getElementById("name").value;
    document.getElementById("welcome").innerHTML = input_name;
}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDay = 24;
    let dayInYear = 365;
    
    let secInYear = secInMinutes * minInHours * hoursInDay * dayInYear;
    document.getElementById("seconds").innerHTML = secInYear;
}

function t03() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let third = Number(document.getElementById("third").value);
    
    let average = (first + second + third) / 3;
    document.getElementById("average").innerHTML = average;

}

function t04() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let summa = number1 + number2;
    document.getElementById("d1").innerHTML = number1;
    document.getElementById("d2").innerHTML = number2;
    document.getElementById("d3").innerHTML = summa;

    let erotus = number1 - number2;
    document.getElementById("d4").innerHTML = number1;
    document.getElementById("d5").innerHTML = number2;
    document.getElementById("d6").innerHTML = erotus;
    
    let tulo = number1 * number2;
    document.getElementById("d7").innerHTML = number1;
    document.getElementById("d8").innerHTML = number2;
    document.getElementById("d9").innerHTML = tulo;
    
    let osamaara = number1 / number2;
    document.getElementById("d10").innerHTML = number1;
    document.getElementById("d11").innerHTML = number2;
    document.getElementById("d12").innerHTML = osamaara;
    
    let jakojaannos = number1 % number2;
    document.getElementById("d13").innerHTML = number1;
    document.getElementById("d14").innerHTML = number2;
    document.getElementById("d15").innerHTML = jakojaannos;
    

}

function t05() {   
    let price = Number(document.getElementById("price").value);
    let percent = Number(document.getElementById("percent").value);
    
    let newprice = price - (price * percent / 100);
    document.getElementById("newprice").innerHTML = newprice;


}

function t06() {
    let today = new Date();
    let current_year = today.getFullYear();
    let birthyear = Number(document.getElementById("year").value);
    let age = current_year - birthyear;
    document.getElementById("age").innerHTML = age;

}

function t07() {
    let seats = Number(document.getElementById("seats").value);
    let guests = Number(document.getElementById("guests").value);
    let remaining = seats - guests;
    document.getElementById("remaining").innerHTML = remaining;
}

function t08() {
    let plants = Number(document.getElementById("plants").value);
    let distance = Number(document.getElementById("distance").value);
    let length_cm = plants * distance;
    let length_m = length_cm / 100;
    document.getElementById("length_cm").innerHTML = length_cm;
    document.getElementById("length_m").innerHTML = length_m;
    }


function t09() {
    let guests = Number(document.getElementById("participant").value);
    let sausages = guests * 3;
    let drinks = guests * 5;
    let tomatoes = guests * 2; 
    let eggs = guests * 1;
    document.getElementById("sausages").innerHTML = sausages;
    document.getElementById("drinks").innerHTML = drinks;
    document.getElementById("tomatoes").innerHTML = tomatoes;
    document.getElementById("eggs").innerHTML = eggs;

}




