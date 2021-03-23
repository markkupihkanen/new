/*
 * Student name : Markku Pihkanen
 * Created on : January, 2020
 */

function window_calculation() {

    document.getElementById("error").innerHTML = "";
    document.getElementById("wood").innerHTML = "";
    document.getElementById("glass").innerHTML = "";
    document.getElementById("woods").innerHTML = "";
    document.getElementById("glasses").innerHTML = "";

    let height = document.getElementById("window_height").value;
    let width = document.getElementById("window_width").value;
    let amount = document.getElementById("window_amount").value;

    if (amount === "") {
        amount = 1;
        document.getElementById("error").innerHTML = "No amount. 1 assumed";
    }

    height = Number(height);
    width = Number(width);
    amount = Number(amount);

    if (height > 200 || width > 200) {
        document.getElementById("error").innerHTML = "Maximium height and width of window is 200cm.";
        return;
    }

    if (height < 50 || width < 50) {
        document.getElementById("error").innerHTML = "Minium height and width of window is 50cm.";
        return;
    }

    if (amount > 10) {
        document.getElementById("error").innerHTML = "No more than 10 equal size windows";
        return;
    }

    let wood = (height * 2 + width * 2 - 24) * 2 / 100;
    document.getElementById("wood").innerHTML = wood;

    let glass = ((height - 10) / 100) * ((width - 10) / 100);
    document.getElementById("glass").innerHTML = glass;

    let woods = wood * amount;
    document.getElementById("woods").innerHTML = woods;

    let glasses = glass * amount;
    document.getElementById("glasses").innerHTML = glasses;

}

