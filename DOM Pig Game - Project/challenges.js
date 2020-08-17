/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

NEW CHALLENGE RULES:
1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next players turn. (store previous dice roll in a variable)
2. Add an input field to the HTML where players can set the winning score, so they can change the predifined score of 100. (read with .value)
3. Add another dice to the game, so that there are two dices now. The player loses his current score when one of them is a 1. (adjust css for adding new dice)

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
/* Getter
var x = document.querySelector('#score-0').textContent;
console.log(x); */

var previousRoll;
//Anonymous Function, when the function doesn't have name and is only called here so doesn't need name
document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying){
        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        /*//3. Update the round score IF the rolled number != 1
        if(previousRoll === 6 && dice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            previousRoll = 0;
            nextPlayer();
        } else if(dice !== 1){
            //Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousRoll = dice;
        } else {
            nextPlayer();
        }*/

        //3. Update the round score IF the rolled number != 1
        if(dice1 !== 1 && dice2 !== 1){
            //Add Score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

//Hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        //1. Add current score to players global score
        scores[activePlayer] += roundScore;

        //2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var inputScore = document.querySelector('.final-score').value;

        if(finalScore){
            var finalScore = inputScore;
        } else{
            finalScore = 100;
        }

        //3. Check if player won the game
        if(scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else{
            nextPlayer();
        }
    }

});

function nextPlayer(){
        //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        //Reset current scores to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        //Switch the active player style (background highlighting)
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //Hide the dice when it moves to next player
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

//Start a new game
document.querySelector('.btn-new').addEventListener('click', init);

//When app loads and when we click the new game button
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    
    //Hide the dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    //Zero out all of the scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Reset the player names to get rid of winner
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //Remove the winner and active classes to reset the game
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //Make player 0 the active player
    document.querySelector('.player-0-panel').classList.add('active');
}

