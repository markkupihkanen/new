/*
 * Student name : Markku Pihkanen
 * Created on : February, 2020
 */



function check() {
    document.getElementById("idcode").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("age").innerHTML = "";
    document.getElementById("sex").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    let idcode = document.getElementById("idcode").value;
    let century = idcode.substring(6, 7);
    let order = idcode.substring(9, 10);

    if (idcode.length !== 11) {
        document.getElementById("error").innerHTML = "Id code must have 11 characters";
        return;
    }
    if (isNaN(idcode.substring(0, 6)) === true) {
        document.getElementById("error").innerHTML = "Id code must have 6 numbers at first.";
        return;
    }

    if (century !== "-" && century !== "+" && century !== "A") {
        document.getElementById("error").innerHTML = "The century mark must be +, -or A.";
        return;
    }

    if (isNaN(order) === true) {
        document.getElementById("error").innerHTML = "The ordernumber must be a number.";
        return;
    }
    let virhe = checkDate();
    if (virhe !== "") {
        return;
    }
    calculateAge();
    findSex();
    calculateCheckMark();



}


/**Checks that the given date is right. Returns an error message or empty string
 * which means that the date is right
 *  
 * @param {string} value     the date as format ddmmyy
 * @param {string century    is + - or A
 * @returns {string}         an error message or empty string
 */
function checkDate(value, century) {
    let idcode = document.getElementById("idcode").value;
    value = idcode.substring(0, 6);
    let day = value.substring(0, 2);
    let month = value.substring(2, 4);
    let year = value.substring(4, 6);
    let today = new Date();
    let current_year = today.getFullYear();
    century = idcode.substring(6, 7);



    day = Number(day);
    month = Number(month);
    year = Number(year);


    if (day > 31 || day < 1) {
        document.getElementById("error").innerHTML = "Day must be 1... 31.";
        return "Day must be 1... 31.";
    }

    if (month > 12 || month < 1) {
        document.getElementById("error").innerHTML = "Month must be 1... 12.";
        return "Month must be 1... 12.";
    }

    if (century === "A") {
        year = year + 2000;
    }
    if (year > current_year) {
        document.getElementById("error").innerHTML = "Year is too big";
        return "Year is too big";

    } else {
        return "";
    }

}


/**
 * Calculates personäs age based on a year.
 * 
 * @param {string} value    the date as format ddmmyy
 * @param {string} century  is + - or A
 * @returns {number}        the calculated age
 */

function calculateAge(value, century) {
    let today = new Date();
    let current_year = today.getFullYear();
    let idcode = document.getElementById("idcode").value;
    let year = idcode.substring(4, 6);
    century = idcode.substring(6, 7);


    year = Number(year);

    if (century === "A") {
        year = year + 2000;
    }

    if (century === "-") {
        year = year + 1900;
    }

    if (century === "+") {
        year = year + 1800;
    }

    let age = current_year - year;
    document.getElementById("age").innerHTML = age;

}

/**
 * Finds out the sex of a person.
 * 
 * @param {string} value    order number in the personal identfication code
 * @returns {string}        female or male
 */

function findSex(value) {
    let idcode = document.getElementById("idcode").value;
    value = idcode.substring(7, 10);

    if (value % 2 === 0) {
        document.getElementById("sex").innerHTML = "female";
    } else {
        document.getElementById("sex").innerHTML = "male";
    }
}


/**
 * Calculates the control charcter of the personal identfication code.
 * 
 * @param {string} value1    ddmmyy part of the identfication code
 * @param {string} value2    order number part of the identification code
 * @returns {string}         cCalculated control character
 */
function calculateCheckMark(value1, value2) {
    let checkMarks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
    let idcode = document.getElementById("idcode").value;
    let order = idcode.substring(10);
    value1 = idcode.substring(0, 6);
    value2 = idcode.substring(7, 10);
    let concatenate = value1 + value2;
    let remainder = concatenate % 31;





    if (order === checkMarks[remainder]) {
        document.getElementById("result").innerHTML = " Identification code is right.";
    } else {
        document.getElementById("result").innerHTML = " Identification code is not right. Calculated control character is " + checkMarks[remainder];
    }

}

