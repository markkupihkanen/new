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

function v10() {

    const ERROR = "Points should be between 0 - 60.";
    document.getElementById("grade_error").innerHTML = "";
    document.getElementById("grade").innerHTML = "";

    let points = Number(document.getElementById("points").value);

    if (points < 0 || points > 60) {
        document.getElementById("grade_error").innerHTML = ERROR;
        return;
    }

    points = Number(points);

    if (points < 0 || points > 60) {
        document.getElementById("grade_error").innerHTML = "Points should be between 0 - 60.";
        return;
    }

    if (points < 30) {
        document.getElementById("grade").innerHTML = "fail";

    } else if (points < 35) {
        document.getElementById("grade").innerHTML = "satisfactory";

    } else if (points < 40) {
        document.getElementById("grade").innerHTML = "fair";

    } else if (points < 50) {
        document.getElementById("grade").innerHTML = "good";

    } else {
        document.getElementById("grade").innerHTML = "excellent";
    }

}

function v11() {
    const ERROR = "Hours should be between 0 - 24.";
    document.getElementById("clock_error").innerHTML = "";
    document.getElementById("greeting").innerHTML = "";

    var clock = Number(document.getElementById("clock").value);

    if (clock === "") {
        document.getElementById("clock_error").innerHTML = "Hours should be between 0 - 24.";
        return;
    }
    
    clock = Number(clock);

    if (clock < 0 || clock > 24) {
        document.getElementById("clock_error").innerHTML = "Hours should be between 0 - 24.";
        return;
    }

    if (clock < 4) {
        document.getElementById("greeting").innerHTML = "Good night";
    } else if (clock < 12) {
        document.getElementById("greeting").innerHTML = "Good morning";
    } else if (clock < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    } else if (clock < 21) {
        document.getElementById("greeting").innerHTML = "Good evening";
    } else {
        document.getElementById("greeting").innerHTML = "Good night";
    }


}

function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests.";

    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";


    document.getElementById("party_error").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("shopping_list").innerHTML = "";

    var guests = Number(document.getElementById("guests").value);

    var sausages1 = guests * 3;
    var drinks1 = guests * 5;
    var tomatoes1 = guests * 2;
    var eggs1 = guests *1;
    
    
    var sausages2 = guests * 2;
    var drinks2 = guests * 3;
    var tomatoes2 = guests * 1;
    var eggs2 = guests *0.5;
    

   

    if (guests < 0) {
        document.getElementById("party_error").innerHTML = "Number of guests cannot be negative.";
        return;
    }
    if (guests < 3) {
        document.getElementById("party_error").innerHTML = "Party is cancelled due to too few guests.";
    }

    if (guests < 16 && guests > 3) {
        document.getElementById("shopping_list").innerHTML = "Shopping list:" + " <br>" + "- Sausages " + sausages1 + " pcs<br>" + "- Drinks " + drinks1 + " bottles<br>" + "- Tomatoes " + tomatoes1 + " pcs<br>" + "- Eggs " + eggs1 + " pcs";
        document.getElementById("address").innerHTML = "Naapuritie 1";
        
        
    } if (guests < 51 && guests > 14) {
        document.getElementById("shopping_list").innerHTML = "Shopping list:" + " <br>" + "- Sausages " + sausages2 + " pcs<br>" + "- Drinks " + drinks2 + " bottles<br>" + "- Tomatoes " + tomatoes2 + " pcs<br>" + "- Eggs " + eggs2 + " pcs";
        document.getElementById("address").innerHTML = "Naapuritie 12";

        
        
    } if (guests > 51) {
         document.getElementById("shopping_list").innerHTML = "Shopping list:" + " <br>" + "- Sausages " + sausages2 + " pcs<br>" + "- Drinks " + drinks2 + " bottles<br>" + "- Tomatoes " + tomatoes2 + " pcs<br>" + "- Eggs " + eggs2 + " pcs";
         document.getElementById("address").innerHTML = "Juhlasalintie 34";

        
    }

 if (Number.isInteger(guests) === false) {
        document.getElementById("party_error").innerHTML = "Number of guests must be integer.";

    }




}





