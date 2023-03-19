'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.getElementById ('current--0');
const currentScore1 = document.getElementById ('current--1');

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const dices = document.querySelector(".dice");

 
let socres, currScore, activePlayer, playing;

let init = function(){

    socres = [0, 0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    dices.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');



}

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

btnRoll.addEventListener('click', function(){
    //1. genrating a random diece roll
    if (playing){
    const dice = Math.trunc(Math.random()*6) +1;
    console.log(dice);
    //2. dispaly dice
    dices.classList.remove("hidden");
    dices.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1){
        currScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currScore;
    }else{
        // switch to next palyer
        switchPlayer();
        
    }

}
})

btnHold.addEventListener('click', function(){
    if (playing){
    socres[activePlayer] += currScore
    document.getElementById(`score--${activePlayer}`).textContent = socres[activePlayer];   
    if (socres[activePlayer] >= 20){
        playing = false;
        dices.classList.add('hidden');

        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        
        
    } else{
        switchPlayer(); 
    }
}
      
})

newGame.addEventListener('click', init);