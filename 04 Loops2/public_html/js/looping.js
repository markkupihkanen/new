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

// define here the common functions calculateHedgeRow and getMeters
function calculateHedgeRow(plant, distance) {
    return plant * distance;
    
}


function getMeters(distance) {
    return distance / 100;
    
}


let length_cm1_total = 0;
let length_m1_total = 0;
let plants1_total = 0;

function lt01() {
    let plants = Number(document.getElementById("plants1").value);
    let distances = Number(document.getElementById("distance1").value); 
    let length_cm = calculateHedgeRow(plants, distances);
    let length_m = getMeters (length_cm);
    
    
    length_cm1_total += length_cm;
    length_m1_total += length_m;
    plants1_total += plants;
    
    document.getElementById("length_cm1").innerHTML = length_cm;
    document.getElementById("length_m1").innerHTML = length_m;
    document.getElementById("length_cm1_total").innerHTML = length_cm1_total;
    document.getElementById("length_m1_total").innerHTML = length_m1_total;
    document.getElementById("plants1_total").innerHTML = plants1_total;
}

let length_cm2_total = 0;
let length_m2_total = 0;
let plants2_total = 0;
let family_total = 4;

function lt02() {
    if (family_total > 0) {
        let plants = Number(document.getElementById("plants2").value);
        let distances = Number(document.getElementById("distance2").value);
        let length_cm1 = calculateHedgeRow(plants, distances);
        let length_m1 = getMeters (length_cm1);
        
         length_cm2_total += length_cm1;
         length_m2_total += length_m1;
         plants2_total += plants;
         
    document.getElementById("length_cm2").innerHTML = length_cm1;
    document.getElementById("length_m2").innerHTML = length_m1;
    document.getElementById("length_cm2_total").innerHTML = length_cm2_total;
    document.getElementById("length_m2_total").innerHTML = length_m2_total;
    document.getElementById("plants2_total").innerHTML = plants2_total;
    family_total--;
    } else {
       document.getElementById("finish").innerHTML = "All data entered.";
        
    }

}

function lt03() {    
    let plants = Number(document.getElementById("plants3").value);
    let distances = Number(document.getElementById("distance3").value);
    
     let length_cm1 = calculateHedgeRow(plants, distances);
     let length_m1 = getMeters (length_cm1);

         let length_cm3_total = 4 * length_cm1;
         let length_m3_total = 4 * length_m1;
         let plants3_total = 4 * plants;
         
           document.getElementById("length_cm3").innerHTML = length_cm1;
           document.getElementById("length_m3").innerHTML = length_m1;
           document.getElementById("length_cm3_total").innerHTML = length_cm3_total;
           document.getElementById("length_m3_total").innerHTML = length_m3_total;
           document.getElementById("plants3_total").innerHTML = plants3_total;

         
}