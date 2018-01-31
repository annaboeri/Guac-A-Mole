var holes = document.querySelectorAll('.hole');
var scoreCount = document.querySelector('#score-count');
var timeCount = document.querySelector('#time-count');
var gameOver = document.querySelector('#game-over');
var newGameBtn = document.querySelector('#new-game');
var container = document.querySelector('.container');
var currentScore = 0;
var seconds = 20;
var avocadoImage = '<img class="image" src="https://emojipedia-us.s3.amazonaws.com/socialmedia/apple/118/avocado_1f951.png" alt="avocado">';
var tomatoImage = '<img class="image" src="https://emojipedia-us.s3.amazonaws.com/socialmedia/apple/118/tomato_1f345.png" alt="tomato">';
var pepperImage = '<img class="image" src="https://emojipedia-us.s3.amazonaws.com/socialmedia/apple/118/hot-pepper_1f336.png" alt="pepper">';
var cilantroImage = '<img class="image" src="https://emojipedia-us.s3.amazonaws.com/socialmedia/apple/81/leaf-fluttering-in-wind_1f343.png" alt="cilantro">';
var guacamoleImage = '<img src="https://static.vecteezy.com/system/resources/previews/000/161/176/non_2x/moljacete-with-guacamole-vector-background.jpg" alt="guacamole">';

function randomInt(n){
    return Math.floor( Math.random()* n )
}

//function that generates new mole location on each new page load
function generateMole(){
    var moleHole = holes[ randomInt(9) ];
    moleHole.innerHTML = avocadoImage;
}
generateMole();

//function that stops the timer 
function stopTimer(){
    clearInterval(timeCountTimer);
    timeCount.innerText = seconds;
}

//function that counts down from whatever seconds variable is set to
function createTimer(){
    seconds = seconds - 1;
    timeCount.innerText = seconds;
    if (seconds === 0){
        stopTimer();
        if (currentScore > 9){
            gameOver.innerText = "Good work! You smashed enough avocados to make guacamole!";
            container.innerHTML = guacamoleImage;
        }
        else {
            gameOver.innerText = "Sorry, you didn't smash enough avocados. No guacamole for you : ("
        }
     }
}
    
        //remove event listener from all holes when game is over
        for (var i = 0; i < holes.length; i++){
        holes[i].removeEventListener('click', moleClicked);
         }



var timeCountTimer = setInterval(createTimer,1000);

function moleClicked(){
    if (this.innerHTML === ""){
        console.log("Mole is not here");
        currentScore = currentScore - 1;
        scoreCount.innerText = currentScore;
    }
    else {
        console.log("Mole is here!");
         // If correct, add 1 to score
        currentScore = currentScore + 1;
        scoreCount.innerText = currentScore;
    }
}
//add event listener to all holes
for (var i = 0; i < holes.length; i++){
    holes[i].addEventListener('click', moleClicked);
}

//function that moves mole to new hole and clears previous mole 
function moleMove(){
    for(var i = 0; i < holes.length; i++){
        holes[i].innerText = "";
    };
    var newMoleHole = holes[ randomInt(9) ];
        newMoleHole.innerHTML = avocadoImage;
    if (seconds === 0){
        for(var j = 0; j < holes.length; j++){
            holes[j].innerText = "";
        }
    }
}
//sets timer that runs moveMole function every second
var moleTimer = setInterval(moleMove, 775);


//new game
if (seconds === 0){

}
