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

// what shape is selected?
// 
// 1 = ?, 2 = ?
let whatShape = 1; // global variable
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

// do not change this function
// this is for printing
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

// Circle functions are here
function calculateCircleAround(r) {
    return 2 * Math.PI * r;
}

function calculateCircleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

// Write Square function here



function calculateSquareAround(s){
    
    return s * 4;
}

function calculateSquareArea (s) {
    
   return s*s;
   }




// Paste here the random number generator function 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Button functions
function f01() {
    let radius = Number(document.getElementById("radius1").value);
    // circumference = piiri, kehä: 2 * pI * radius, PI =3.14
    let circumference = 2 * Math.PI * radius;

    // area = pinta-ala: pi * radius to power 2
    let area = Math.PI * Math.pow(radius, 2);

    document.getElementById("c_around").innerHTML = Math.round(circumference);
    // piiri
    document.getElementById("c_area").innerHTML = Math.round(area);
}

function f02() {
    let side = Number(document.getElementById("side").value);
    let bottom = Number(document.getElementById("bottom").value);
    
    let a = bottom/2;
    
     let around = side * 2 + bottom;
    document.getElementById("t_around").innerHTML = Math.round(around);
    
    let height = Math.sqrt(Math.pow(side,2) - (Math.pow(a,2)));
    document.getElementById("t_height").innerHTML = Math.round(height);
    
    
    let area = (bottom * height)/2;
    document.getElementById("t_area").innerHTML = Math.round(area);
    



}

function f03() {
    // local variables are known only in the function that they are defined in
    let radius = Number(document.getElementById("radius2").value);

    // circumference = perimeter = piiri
    let circumference = calculateCircleAround(radius);

    let area = calculateCircleArea(radius);

//    local variables, known inside the function    
    let p = document.getElementById('circle');
    print(p, "Circle:", Math.round(area), Math.round(circumference));
}

function f04(){
    let side = Number(document.getElementById("side2").value);
    let area = calculateSquareArea(side);
    let around = calculateSquareAround(side);
    
    let p = document.getElementById("square");
    print (p, "Square:", Math.round(area), Math.round(around));
    

}

function f05() {
    let amount = Number(document.getElementById("amount").value);
    
    if (whatShape === 1) {
        let a1 = calculateCircleAround(amount);
        let a2 = calculateCircleArea (amount);
        let p = document.getElementById("result");
        
        print(p, "Circle:", Math.round(a2), Math.round(a1)); 
        
    } else { 
        
       let a1 = calculateSquareAround(amount);
       let a2 = calculateSquareArea(amount);
       let p = document.getElementById("result");
       
       print(p, "Square:", a2, a1); 
        
}
}

function f06() {
    
    let min = 1;
    let max = 6;
    let dice = getRndInteger(min, max);
    document.getElementById("dice").innerHTML=dice;
    
    

}

function f07() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let randoms = getRndInteger(min, max);
     document.getElementById("randoms").innerHTML += randoms + " "; 
    
}

// Write getCharacter and getDigit functions here
function getCharacter(text, index, uppercase) {
    let character = text.charAt(index);
    if (uppercase === true) {
        character = character.toUpperCase();
    } else {
            character = character.toLowerCase();
        }
    
    return character;
}



function getDigit() {
  //  let date = new Date();
  //  let year = date.getFullYear();
    let year = (new Date()).getFullYear();
    year = year.toString();
    
   // let digit = year.charAt(3);
    let digit = year.charAt(year.length - 1);
    return digit;
}
  
            



function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name:  
    // last name: 
    // user id: 
    // password: 
    
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    
    let c1 = getCharacter(firstname, 0, false);
    let c2 = getCharacter(firstname, 1, false);
    let c3 = getCharacter(lastname, 0, false);
    let c4 = getCharacter(lastname, 1, false);
    
    let num = getDigit();
    
    let userid = "n" + num + c1 + c2 + c3 + c4 + "00";
    
    let c5 = getCharacter(firstname, firstname.length - 1, true);
    let c6 = getCharacter(lastname, lastname.length - 1, true);
    let c7 = getCharacter(lastname, lastname.length - 2, true);
    num++;  
    
    let password = "!?" + c1 + c5 + c3 + c6 + c7 + "+/" + num;
    document.getElementById("userid").innerHTML = userid;
    document.getElementById("password").innerHTML = password;
    }



