$(document).ready(function() {

    // global variables

    // Empty variable to hold random number to match
    var num = "";

    // Empty variables to hold the random value for each crystal
    var ruby = "";
    var sapphire = "";
    var diamond = "";
    var amethyst = "";

    //Empty variable to hold running total of clicked crystal values
    var score = "";

    //Empty variables to hold wins/losses
    var wins = "";
    var losses = "";

    $(document).keyup(function newGame() {
        newGame();

        // generate random number between 19 and 120
        var num = 19 + Math.floor(Math.random() * 120);
        console.log("random number to match is " + num);

        $("matchNumber").text(num);
    })

})