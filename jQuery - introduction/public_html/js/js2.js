/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $(".fa").click(function () {
// $(this).parent().next().removeClass("hided"); 

// $(this).parent().next().show(2000); // 2000 = 2s
// $(this).parent().next().toggle();

// $(this).parent().next().fadeIn(5000);
// $(this).parent().fadeToggle();

       // $(this).parent().next().slideDown(5000);
        $(this).parent().next().slideToggle(3000, "swing"); // linear, swing
        if ($(this).hasClass("fa-plus-circle")) {
            $(this).removeClass("fa-plus-circle");
            $(this).addClass("fa-minus-circle");
        } else {
            $(this).removeClass("fa-minus-circle").addClass("fa-plus-circle");
        }

// $(this).parent().next().slideToggle(3000, "swing", function () {
// $(this)= text that is being shown
//     if ($(this).prev().children().first().hasClass("fa-plus-circle")) {
//         $(this).prev().children().first().removeClass("fa-plus-circle");
//         $(this).prev().children().first().addClass("fa-minus-circle");
//     } else {
//         $(this).prev().children().first().removeClass("fa-minus-circle").addClass("fa-plus-circle");
//     }
//  });

    });
    
    
    $("#flower1").click(function(){
       
      // $(this).hide("slow");
      // $("#peony1").fadeIn(3000);
      
       // callback function = something is done after the first event
       
       $(this).hide("slow", function(){
          $("#peony1").fadeIn(6000); 
       });
    });
    
    $("#peony1").click(function(){
       $(this).slideUp("slow", function(){
           $("#flower1").show(2000);
       });
    });
    
    $("#flower2").click(function(){
       $(this).slideUp("slow", function(){
           $("#peony2").slideDown(5000);
       });
    });
    
    $("#peony2").click(function(){
        $(this).slideUp("slow", function(){
         $("#flower2").slideDown(2000);   
        });
    });
});

