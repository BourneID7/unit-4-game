$(document).ready(function() {

    // global variables

    // Empty variable to hold random number to match
    var num = "";

    // variables to hold even or odd crystal values
    var even = [2, 4, 6, 8, 10, 12];
    var odd = [1, 3, 5, 7, 9, 11];

    // Empty variables to hold the random value for each crystal
    var ruby = "";
    var sapphire = "";
    var diamond = "";
    var amethyst = "";

    //Empty variable to hold running total of clicked crystal values
    var score = 0;

    //Empty variables to hold wins/losses
    var wins = 0;
    var losses = 0;


    // $(document).keyup(function newGame() {
    //     newGame();


        // generate random number between 19 and 120
        var num = 19 + Math.floor(Math.random() * 120);
        console.log("random number to match is " + num);

        // display number to match
        $("#matchNumber").append("The number to match is " + num);

        //generate even or odd random number between 1 and 12 for each crystal
        var ruby = even[Math.floor(Math.random() * even.length)];
        console.log("random value of ruby is " + ruby);

        var sapphire = odd[Math.floor(Math.random() * odd.length)];
        console.log("random value of sapphire is " + sapphire);

        var diamond = odd[Math.floor(Math.random() * odd.length)];
        console.log("random value of diamond is " + diamond);

        var amethyst = even[Math.floor(Math.random() * even.length)];
        console.log("random value of amethyst is " + amethyst);

        // assign crystal values to corresponding image. Function to add value to score when clicked.
        $("#sapphireBtn").on("click", function() {
            var value = $(this).sapphire;
            score = score + sapphire;
            console.log(score);
        })
        $("#rubyBtn").on("click", function() {
            var value = $(this).ruby;
            score = score + ruby;
            console.log(score);
        })
        $("#diamondBtn").on("click", function() {
            var value = $(this).diamond;
            score = score + diamond;
            console.log(score);
        })
        $("#amethystBtn").on("click", function() {
            var value = $(this).amethyst;
            score = score + amethyst;
            console.log(score);
        })

        // Update & display score

        // determine win. Add 1 to total wins & display win message
        if (score === num) {
            wins++;
            $("#winMessage").append("You win!");
        } 
        // determine loss. Add 1 to total losses & display loss message
        else if (score > num) {
            losses++;
            $("#lossMessage").append("Sorry! You lost!");
        }


        // function to reset game with new number to match, crystal values & clear score


    // })

})