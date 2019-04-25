$(document).ready(function() {
        
        // global variables

        // Empty variable to hold random number to match
        var num = 0;

        // variables to hold even or odd crystal values
        var even = [2, 4, 6, 8, 10, 12];
        var odd = [1, 3, 5, 7, 9, 11];

        // Empty variables to hold the random value for each crystal
        var ruby = "";
        var sapphire = "";
        var diamond = "";
        var amethyst = "";

        //Empty variables to hold running total of clicked crystal values
        var score = 0;
        var scoreText = $("#yourScore");

        //Empty variables to hold wins/losses
        var wins = 0;
        var losses = 0;

    function newGame() {

        // generate random number between 19 and 120
        num = 19 + Math.floor(Math.random() * 120);
        console.log("random number to match is " + num);

        // display number to match
        $("#matchNumber").append("The number to match is " + num);

        //generate even or odd random number between 1 and 12 for each crystal
        ruby = even[Math.floor(Math.random() * even.length)];
        console.log("random value of ruby is " + ruby);

        sapphire = odd[Math.floor(Math.random() * odd.length)];
        console.log("random value of sapphire is " + sapphire);

        diamond = odd[Math.floor(Math.random() * odd.length)];
        console.log("random value of diamond is " + diamond);

        amethyst = even[Math.floor(Math.random() * even.length)];
        console.log("random value of amethyst is " + amethyst);

        // assign crystal values to corresponding image. Function to add value to score when clicked.

        $("#sapphireBtn").on("click", function() {
            $(this).sapphire;
            score = score + sapphire;
            console.log("current score is " + score);

            // update display score
            scoreText.text(null);
            $("#yourScore").append(score);

            // determine win. Add 1 to total wins & display win message. Update wins total.
            if (score === num) {
                wins++;
                $("#winMessage").append("Game over. You win!");
                $("#winsTotal").append("Wins: " + wins)
            } 
            // determine loss. Add 1 to total losses & display loss message. Update losses total.
            else if (score > num) {
                losses++;
                $("#lossMessage").append("Game over. Sorry, You lost!");
                $("#lossTotal").append("Losses: " + losses)

            }
       
        })
        $("#rubyBtn").on("click", function() {
            $(this).ruby;
            score = score + ruby;
            console.log("current score is " + score);

            // update display score
            scoreText.text(null);
            $("#yourScore").append(score);

            // determine win. Add 1 to total wins & display win message. Update wins total.
            if (score === num) {
                wins++;
                $("#winMessage").append("Game over. You win!");
                $("#winsTotal").append("Wins: " + wins)
            } 
            // determine loss. Add 1 to total losses & display loss message. Update losses total.
            else if (score > num) {
                losses++;
                $("#lossMessage").append("Game over. Sorry, You lost!");
                $("#lossTotal").append("Losses: " + losses)

            }
                
        })
        $("#diamondBtn").on("click", function() {
            $(this).diamond;
            score = score + diamond;
            console.log("current score is " + score);

            // update display score
            scoreText.text(null);
            $("#yourScore").append(score);

            // determine win. Add 1 to total wins & display win message. Update wins total.
            if (score === num) {
                wins++;
                $("#winMessage").append("Game over. You win!");
                $("#winsTotal").append("Wins: " + wins)
            } 
            // determine loss. Add 1 to total losses & display loss message. Update losses total.
            else if (score > num) {
                losses++;
                $("#lossMessage").append("Game over. Sorry, You lost!");
                $("#lossTotal").append("Losses: " + losses)

            }
                   
        })
        $("#amethystBtn").on("click", function() {
            $(this).amethyst;
            score = score + amethyst;
            console.log("current score is " + score);

            // update display score
            scoreText.text(null);
            $("#yourScore").append(score);

            // determine win. Add 1 to total wins & display win message. Update wins total.
            if (score === num) {
                wins++;
                $("#winMessage").append("Game over. You win!");
                $("#winsTotal").append("Wins: " + wins)
            } 
            // determine loss. Add 1 to total losses & display loss message. Update losses total.
            else if (score > num) {
                losses++;
                $("#lossMessage").append("Game over. Sorry, You lost!");
                $("#lossTotal").append("Losses: " + losses)

            }
                   
        })
    
    }
    newGame();
    
    // function to reset game with new number to match, crystal values & clear score


})