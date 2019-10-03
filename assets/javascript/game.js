// Pseuo Coding

// Set var for wins,losses, number to get, total score

//Global Variables
var numberWins = 0;
var numberLosses = 0;
var numberToGet = "";
var userScore = "";

console.log(numberWins);
console.log(numberLosses);

// 4 crystals, each with a unique number value
// Set var for each crystal for each color to corresponding ID
// Crystal values are randomly generated, with a range between 1-12
// Use math.random -> math.floor to generate random values within range
// Crystal values must reset every new game
// Use break to reset values

// Crystal Numbers
var crystals = [];
var crystalsMin = 1;
var crystalsMax = 12;


for (
    (i = 0; i < crystals.length ; i++)
    
) 


// Generic Randomizer Function, use once for crustals values nd once for number to get
function Random(min,max){
    var range = (max + 1) - min;
    var randomNumber = (Math.floor(Math.random() * range + min))
    return randomNumber;
}


// Number to get value is randomly generated, with a range between 19-120
// Use math.random -> math.floor to generate random values within range
function Random(min,max){
    var range = (max + 1) - min;
    var randomNumber = (Math.floor(Math.random() * range + min))
    return randomNumber;

// Number to get value must reset every new game
// Use break to reset values


// When clicking on a crystal, it should add to previous result until reaching numberToGet
// If userScore is greater than numberToGet, it counts as a loss
// If userScore is equal to numberToGet, it counts as a win

// Set up a click event for each image with a random number

// Wins and losses are recorded and updated after every game played


// Recommends: put all variables in the beginning of the script page
// Break up how the game works into a couple different functions:
// Set up game: wins losses tracker
// Number to get: reset to 0
// Resetting array of crystals every game
// Setting up click events is its own function
// Actually set up game
// Actually events
//Score checker
