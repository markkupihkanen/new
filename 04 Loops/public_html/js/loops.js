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

function l01() {
    let first_name = document.getElementById("name1").value;
    let last_name = document.getElementById("name2").value;

    for (let  i = 0; i < 5; i++) {
        document.getElementById("first_name").innerHTML +=
                first_name + "<br>";
    }
    let i = 0;
    while (i < 5) {
        document.getElementById("last_name").innerHTML +=
                last_name + "<br>";
        i++;

    }

}

function l02() {    
    
    
    for (let i = 5; i <=50; i = i+5) {
        document.getElementById("five").innerHTML += 
        i + " ";
    }
    
    for (let i = 6; i <= 60; i = i + 6) {
        document.getElementById("six").innerHTML +=
                i + " ";
      
    
}
}

function l03() {
    let amount = Number(document.getElementById("amount").value);
    
    let stars = "*";
    for (let i = 0; i < amount; i++) {
        document.getElementById("stars1").innerHTML +=
                stars + "<br>";
        stars += "*";
        }
    
let i = 0;
stars = "*";
while (i < amount) {
        document.getElementById("stars2").innerHTML +=
                stars + "<br>";
        stars += "*";
        i++;
    }

}

function l04() {
    for (let i = 10; i >= -10; i--) {
        document.getElementById("numbers1").innerHTML +=
                i + " ";
    }

        for (let i = -20; i <= 20; i = i + 2) {
            document.getElementById("numbers2").innerHTML +=
                    i + " ";
        }
            
            
        for (let i = 29; i>= 1; i = i - 2) {
            document.getElementById("numbers3").innerHTML +=
                    i + " ";
        }
                    
        }

function l05() {

let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);
document.getElementById("divisibility3").innerHTML = "";
document.getElementById("divisibility5").innerHTML = "";


for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
    document.getElementById("divisibility3").innerHTML+= i + " ";
   
}
}
for (let i = min; i <= max; i++) {
    if (i % 5 === 0) {
    document.getElementById("divisibility5").innerHTML+= i + " ";
    }

        
}
}     
// copy and paste here the random number generator function 
// and use it in the following functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function l06() {   

let zeros = 0;
let ones = 0;
for (let i = 0; i < 1000; i++) {
    let luku = getRndInteger(0,1);
    if (luku === 0) {
        zeros++;
    }
    else {
        ones++;
    }
}
document.getElementById("zeros").innerHTML = zeros;
document.getElementById("ones").innerHTML = ones;
}

function l07() {
   document.getElementById("week").innerHTML = getRndInteger(1, 52);
   let tulos = "";
   for (let i = 1; i <= 7; i++) {
       tulos += getRndInteger(0, 9) + " ";
   }
   document.getElementById("joker").innerHTML = tulos;
}

function l08() {
    let multiplier = Number(document.getElementById("multiplier").value);
    document.getElementById("table").innerHTML = "";
    let tulos = "";
    
    for (let i = 0; i <= 10; i++) {
        let maara = multiplier * i;
        tulos += multiplier + " * " + i + " = " + maara + "<br>";
    }
    document.getElementById("table").innerHTML = tulos;
}

function l09() {
    const space = ";&nbsp;&nbsp;";
    document.getElementById("multiplication").innerHTML = "";
    
    let tulos = "";
    
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            let maara = i * j;
            tulos += i + " * " + j + " = " + maara + space;
        }
        tulos += "<br>";
    }
    document.getElementById("multiplication").innerHTML = tulos;

}

