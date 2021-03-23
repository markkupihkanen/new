/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

describe("Classification", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // V10: Grades
    it("V10: Grades - error test", function () {
        // aseta parametrit
        $("#points").val(-5);
        // kutsutaan tarkistettavaa funktiota
        v10();
        // haetaan etusivulta html-elementin arvo
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();

        // tarkistetaan onko se oikein
        expect(temp1).toEqual("");
        expect(temp2).toEqual("Points should be between 0 - 60.");

        $("#points").val(65);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();

        expect(temp1).toEqual("");
        expect(temp2).toEqual("Points should be between 0 - 60.");
    });

    // V10: Grades
    it("V10: Grades - grades test", function () {
        $("#points").val(25);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();        
        expect(temp2).toEqual("");
        expect(temp1).toEqual("fail");

        $("#points").val(30);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();        
        expect(temp2).toEqual("");
        expect(temp1).toEqual("satisfactory");  
        
        $("#points").val(37);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();        
        expect(temp2).toEqual("");
        expect(temp1).toEqual("fair");        
        
        $("#points").val(45);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();        
        expect(temp2).toEqual("");
        expect(temp1).toEqual("good");  
        
        $("#points").val(51);
        v10();
        var temp1 = $("#grade").html();
        var temp2 = $("#grade_error").html();        
        expect(temp2).toEqual("");
        expect(temp1).toEqual("excellent");        
    });

    // V11: Clock
    it("V11: Clock - error test", function () {
        $("#clock").val(25);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("");
        expect(temp2).toEqual("Hours should be between 0 - 24.");

        $("#clock").val(-5);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("");
        expect(temp2).toEqual("Hours should be between 0 - 24.");        
    });

    // V11: Clock
    it("V11: Clock - hours test", function () {
        $("#clock").val(3);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("Good night");
        expect(temp2).toEqual("");
        
        $("#clock").val(9);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("Good morning");
        expect(temp2).toEqual("");
        
        $("#clock").val(13);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("Good afternoon");
        expect(temp2).toEqual("");
        
        $("#clock").val(18);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("Good evening");
        expect(temp2).toEqual("");
        
        $("#clock").val(21);
        v11();
        var temp1 = $("#greeting").html();
        var temp2 = $("#clock_error").html();

        expect(temp1).toEqual("Good night");
        expect(temp2).toEqual("");        
    });

    // V12: Shopping list
    it("V12: Shopping list - error test", function () {
        $("#guests").val(-5);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();

        // tarkistetaan onko se oikein
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");
        expect(temp3).toEqual("Number of guests cannot be negative.");
        
        $("#guests").val(0);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();

        // tarkistetaan onko se oikein
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");
        expect(temp3).toEqual("Party is cancelled due to too few guests.");
        
        $("#guests").val(2);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();

        // tarkistetaan onko se oikein
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");
        expect(temp3).toEqual("Party is cancelled due to too few guests.");
        
        $("#guests").val(2.5);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();

        // tarkistetaan onko se oikein
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");
        expect(temp3).toEqual("Number of guests must be integer.");        
    });

    // V12: Shopping list
    it("V12: Shopping list - guest test", function () {
        $("#guests").val(10);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();
        
        expect(temp1).toEqual(
        "Shopping list: <br>" + 
        "- Sausages 30 pcs<br>" + 
        "- Drinks 50 bottles<br>" + 
        "- Tomatoes 20 pcs<br>" + 
        "- Eggs 10 pcs");
        expect(temp2).toEqual("Naapuritie 1");
        expect(temp3).toEqual("");
        
        $("#guests").val(30);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();
        
        expect(temp1).toEqual(
        "Shopping list: <br>" + 
        "- Sausages 60 pcs<br>" + 
        "- Drinks 90 bottles<br>" + 
        "- Tomatoes 30 pcs<br>" + 
        "- Eggs 15 pcs");
        expect(temp2).toEqual("Naapuritie 12");
        expect(temp3).toEqual("");

        $("#guests").val(56);
        v12();
        var temp1 = $("#shopping_list").html();
        var temp2 = $("#address").html();
        var temp3 = $("#party_error").html();
        
        expect(temp1).toEqual(
        "Shopping list: <br>" + 
        "- Sausages 112 pcs<br>" + 
        "- Drinks 168 bottles<br>" + 
        "- Tomatoes 56 pcs<br>" + 
        "- Eggs 28 pcs");
        expect(temp2).toEqual("Juhlasalintie 34");
        expect(temp3).toEqual("");
        
    });
});

