// Select random number for NumberToGet, should be range between 19-120
var randomNumberToGet = Math.floor(Math.random()*119+1)

// Append randomNumberToGet to numberToGet id in html
$("#numberToGet").text(randomNumberToGet);

console.log(randomNumberToGet)

// Select random number for each crystal, should be range between 1-12
var number1 = Math.floor(Math.random()*12+1)
var number2 = Math.floor(Math.random()*12+1)
var number3 = Math.floor(Math.random()*12+1)
var number4 = Math.floor(Math.random()*12+1)

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

// Declaring starting variables for total score, wins, and losses
var totalScore = 0;
var wins = 0;
var losses = 0;

// Append wins and losses to corresponding html id
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// Game reset function
function reset() {
    // Reset randomNumberToGet
    randomNumberToGet = Math.floor(Math.random()*119+1)
    $("#numberToGet").text(randomNumberToGet);
    // Reset crystal values
    number1 = Math.floor(Math.random()*12+1)
    number2 = Math.floor(Math.random()*12+1)
    number3 = Math.floor(Math.random()*12+1)
    number4 = Math.floor(Math.random()*12+1)
    //Reset total score variable to 0 
    totalScore = 0;
    $("#userScore").text(totalScore);
}

// Win 
function win() {
    //Create alert for win
    alert("You win!");
    // Add +1 to wins score
    wins++;
    // Append +1 to wins score text
    $("#numberWins").text(wins);
    // Call upon reset function
    reset ()
}

// Lose 
function lose() {
    //Create alert for lose
    alert("You lose!");
    // Add +1 to losses score
    losses++;
    // Append +1 to losses score text
    $("#numberLosses").text(losses);
    // Call upon reset function
    reset ()
}

// Clicks for crystals

// Click function for crystal 1
$("#img1").click (function() {
    // Add a click of crystal value to total score
    totalScore = totalScore + number1;
    // Append score of crystal click to userScore id in html
    $("#userScore").text(totalScore);
    // Win/lose conditions
    if (totalScore == randomNumberToGet) {
        win ();
    }
    else (totalScore > randomNumberToGet) 
        lose ();
    }
);

// Click function for crystal 2
$("#img2").click (function() {
    // Add a click of crystal value to total score
    totalScore = totalScore + number2;
    // Append score of crystal click to userScore id in html
    $("#userScore").text(totalScore);
    // Win/lose conditions
    if (totalScore == randomNumberToGet) {
        win ();
    }
    else (totalScore > randomNumberToGet) 
        lose ();
    }
);

// Click function for crystal 3
$("#img3").click (function() {
    // Add a click of crystal value to total score
    totalScore = totalScore + number3;
    // Append score of crystal click to userScore id in html
    $("#userScore").text(totalScore);
    // Win/lose conditions
    if (totalScore == randomNumberToGet) {
        win ();
    }
    else (totalScore > randomNumberToGet) 
        lose ();
    }
);

// Click function for crystal 4
$("#img4").click (function() {
    // Add a click of crystal value to total score
    totalScore = totalScore + number4;
    // Append score of crystal click to userScore id in html
    $("#userScore").text(totalScore);
    // Win/lose conditions
    if (totalScore == randomNumberToGet) {
        win ();
    }
    else (totalScore > randomNumberToGet) 
        lose ();
    }
);





// Pseuo Coding

// Set var for wins,losses, number to get, total score

// 4 crystals, each with a unique number value
// Set var for each crystal for each color to corresponding ID
// Crystal values are randomly generated, with a range between 1-12
// Use math.random -> math.floor to generate random values within range
// Crystal values must reset every new game
// Use break to reset values




// Generic Randomizer Function, use once for crustals values nd once for number to get


// Number to get value is randomly generated, with a range between 19-120
// Use math.random -> math.floor to generate random values within range


// Number to get value must reset every new game
// Use break to reset values


// When clicking on a crystal, it should add to previous result until reaching numberToGet
// If userScore is greater than numberToGet, it counts as a loss
// If userScore is equal to numberToGet, it counts as a win

// Set up a click event for each image with a random number

// Wins and losses are recorded and updated after every game played


// Sean Recommends: put all variables in the beginning of the script page
// Break up how the game works into a couple different functions:
// Set up game: wins losses tracker
// Number to get: reset to 0
// Resetting array of crystals every game
// Setting up click events is its own function
// Actually set up game
// Actually events
//Score checker
