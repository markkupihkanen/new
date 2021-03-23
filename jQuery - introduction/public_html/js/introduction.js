$(document).ready(function () {
    $("#calculate1").click(function () {
        let amount = Number($("#amount1").val());
        let joules = amount * 4.1868;
        $("#result1").html(joules.toFixed(1) + " J");
    });


    $("#amount1").focusin(function () {
        $("#result1").html("");
        $("#amount1").html("");
    });


    $("#calculate2").click(function () {
        let direction =
                Number($("input[name=caljou2]:checked").val());
        let amount = Number($("#amount2").val());
        if (direction === 1) {
            let result = amount * 4.1868;
            $("#result2").html(amount + " cal = " + result.toFixed(1) + " J");
        } else {
            let result = amount * 0.2390;
            $("#result2").html(amount + " J = " + result.toFixed(1) + " cal");
        }
    });

    $("[name=caljou2]").click(function () {
        $("#amount2").focus();
    });

    $("#amount2").focusin(function () {
        $("#result2").html("");
        $("#amount2").select;
    });

    $("#calculate3").click(function () {
        let amount = Number($("#amount3").val());

        let factor = Number($("input[name=caljou3]:checked").val());

        let result = amount * factor;

        let unit_in = $("input[name=caljou3]:checked").attr("data-unit-in");
        let unit_out = $("input[name=caljou3]:checked").attr("data-unit-out");
        $("#result3").html(amount + unit_in + " = " + result.toFixed(1) + unit_out);
    });

    $("[name=caljou3]").click(function () {
        $("#amount3").focus();
    });

    $("#amount3").focusin(function () {
        $("#result3").html("");
        // $("#amount3").select;
        //this = the element of the event
        $(this).select();
    });

    $("#calculate4").click(function () {
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());


        let checkboxes = $("input[name=math]");

        $(checkboxes).each(function () {
            // $(this) >> one checkbox at a time
            if ($(this).prop("checked") === true) {
                let calculation = Number($(this).val());
                if (calculation === 1) {
                    let result = num1 + num2;
                    $("#result4").append(num1 + " + " + num2 + " = " + result + "<br>");
                } else if (calculation === 2) {
                    let result = num1 * num2;
                    $("#result4").append(num1 + " * " + num2 + " = " + result + "<br>");
                } else {
                    let result = num1 - num2;
                    $("#result4").append(num1 + " - " + num2 + " = " + result + "<br>");
                }
            }
        });
    });

    $("[name=math]").click(function () {
        $("#result4").html("");
        $("#num1").focus();
    });

    $(".numbers").focusin(function () {
        $("#result4").html("");
        $(this).select();
    });

    $("[name=color_a]").click(function () {
        $(this).next().addClass("selected");

        let liElements = $(this).parent().parent().children();
        $(liElements).each(function () {
            let elem = $(this).children().first();
            elem.prop("disabled", true);
        });
    });
 

    $("[name=color_b]").click(function () {
        $(this).next().addClass("selected");
        $("[name=color_b]").prop("disabled", true);
    });

    $(".choice").click(function () {
        $(this).parent().addClass("selected");
        // laitetaan li taustaväri
        let attribute_value = $(this).attr("name");
        let selection = "[name=" + attribute_value + "]";
        $(selection).prop("disabled", true);
    });


    $(".choice2").click(function () {
        let attribute_value = $(this).attr("name");
        $('#' + attribute_value).show();

    });
    
    $(".answer1").click(function(){
       let answer = Number($(this).val());
       if (answer === 1) {
            $(this).parent().addClass("selected");
       } else {
            $(this).parent().addClass("wrong");
            // let right_answer = $(this).parent().parent().find("[value=1]");
            //right_answer.parent().addClass("right");
            let attribute_value = $(this).attr("name");
            // right_answer is jQuery object
            let right_answer = $("[name=" + attribute_value + "][value=1]");
            right_answer.parent().addClass("right");
       }
    });
});
