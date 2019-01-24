
var win = 0;
var loss = 0;
var targetScore;
var playerResults=0;
//generating random number for target Score
targetScore = Math.floor(Math.random() * 102) + 19;
//generates your html score
$("#gameResults").html('Target Score: ' + targetScore);


var symbol1 =Math.floor(Math.random() * 12 + 1);
console.log("1:" + symbol1);
var symbol2 =Math.floor(Math.random() * 12 + 1);
console.log("2:"+ symbol2);
var symbol3 =Math.floor(Math.random() * 12 + 1);
console.log("3:" +symbol3);
var symbol4 =Math.floor(Math.random() * 12 + 1);
console.log("4:" +symbol4);

$("#playerResults").html('Player Score: ' + playerResults);

function  checkScore () {
if (targetScore === playerResults) {
    win++;
    $("#winner").html('Wins: ' + win);
    alert("You Win!");
    reset();
}
else if (playerResults > targetScore) {
    loss++;
    $("#loser").html('Losses: ' + loss);
    alert("Sorry you lost you loser!");
    reset();
}
};

function reset () {
    playerResults=0;
    $("#playerResults").html('Player Score: ' + playerResults);
    targetScore = Math.floor(Math.random() * 102) + 19;
    $("#gameResults").html('Target Score: ' + targetScore);
    symbol1 =Math.floor(Math.random() * 12) + 1;
    symbol2 =Math.floor(Math.random() * 12) + 1;
    symbol3 =Math.floor(Math.random() * 12) + 1;
    symbol4 =Math.floor(Math.random() * 12) + 1;
};

$("#symbol1").on("click", function () {
    console.log("click 1 is working");
    $("#playerResults").html('Player Score: ' + (playerResults = playerResults + symbol1));
    checkScore();

});
$("#symbol2").on("click", function () {
    $("#playerResults").html('Player Score: ' + (playerResults = playerResults + symbol2));
    checkScore();

});
$("#symbol3").on("click", function () {
    $("#playerResults").html('Player Score: ' + (playerResults = playerResults + symbol3));
    checkScore();

});
$("#symbol4").on("click", function () {
    $("#playerResults").html('Player Score: ' + (playerResults = playerResults + symbol4));
    checkScore();

});


// generate randonm # for target score
// display text $(#yourid).textContent 
//on click functions for click on crystals
    //add crystal value to playerResults
    //call the checkScores function


 //function that checks to see if player Value = gameValue if its less than game value it will do nothing if it goes over loose and add to losses, = to win function checkScores () {}

 