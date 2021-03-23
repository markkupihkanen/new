/*
 * Your name:
 * Start date:
 * End date:
 * 
 */

$(document).ready(function(){
    /**
     * Generates a random number in a min - max range
     * 
     * @param {Number} min  minimum value for a random number
     * @param {Number} max  maximum value for a random number
     * @returns {Number}    generated random number
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

    /**
     * Calculates the around of circle or square
     * 
     * @param {Number} value    radius or side measurement
     * @param {Number} type     1 = circle, 2 = square
     * @returns {String}        result of a calculation
     */
    function calculateAround(value, type) {
        let result = "";
        if (type === 1) {
            let around = 2 * Math.PI * value;
            result = "Circle around: " + around.toFixed(1);
        } else {
            let around = value * 4;
            result = "Square around: " + around.toFixed(1);
        }
        return result;
    }
    
    // dice images, use indexes 1 - 6
    let dice = [
        '',
        '<span><img src="img/noppa1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa2.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa3.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa4.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa5.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa6.png" class="img-fluid" alt=""/></span>'
    ];
    
    // red and blue flower
    let pair = [
        '<span><img src="img/flower1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/flower2.png" class="img-fluid" alt=""/></span>'
    ];    

// Exercise 1. Circle or Square


   $("#calculate").click(function(){
       let selection = $("input[name=rad_cir_opt]:checked").val();
       if (selection === 1) {
           let radius = calculateAround(radius)
       }
   });
});

    
// Exercise 2. Circle and Square    

    
// Exercise 3. Random numbers 1    


// Exercise 4. Random numbers 2           

    
// Exercise 5. Throw dices    
    

});
