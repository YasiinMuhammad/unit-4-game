
var win = 0;
var loss = 0;
var gameResult;
var playerResults=0;

gameResult = Math.floor(Math.random() * 120 - 12);

$("#gameResults").html('game results: ' + gameResult);


var symbol1 =Math.floor(Math.random() * 12 + 1);
var symbol2 =Math.floor(Math.random() * 12 + 1);
var symbol3 =Math.floor(Math.random() * 12 + 1);
var symbol4 =Math.floor(Math.random() * 12 + 1);



for(var i = 0; i < 4; i++) {
   
    
   var randomNum = Math.floor(Math.random() * 12 + 1);
   
    
    var symbol = $("<div>");
    symbol.attr({
        "class":'symbol',
        "data-random": randomNum
    });
    $(".symbols").append(symbol);


}


// generate randonm # for target score
// display text $(#yourid).textContent 
//on click functions for click on crystals
    //add crystal value to playerResults
    //call the checkScores function


 //function that checks to see if player Value = gameValue if its less than game value it will do nothing if it goes over loose and add to losses, = to win function checkScores () {}

 