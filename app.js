/*
GAME RULES
-The game has 2 players in rounds
-In each turn, a player rolls a dic as many times as he wishes. Each result gets added to his round score
- But if the player rolls a 1, all his round score will be lost. After that it is the next players turn.
- The player can also choose to "HOLD", which means that his ROUND Score gets added to his GLOBAL Score. After that time its the next players turn.
-The first player to reach 100points wins the game
*/

var scores, roundScore, activePlayer, dice;


init();
//Create dice

// document.querySelector("#current-" + activePlayer).textContent = dice; //Setter
// document.querySelector(`#current-${activePlayer}`).textContent = dice;

// var x = document.querySelector('#current-' + activePlayer).textContent;

// console.log(x);

// function rollDice() {
//     console.log("Hey you just clicked ROLL BTN");

// };

// const rollDice = () => {
//   console.log("Hey you just clicked ROLL BTN");
// };



document.querySelector(".btn-roll").addEventListener("click", function () {
  //1, Get a random number
  dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //3. Display the current score
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    roundScore = 0;
    // if(activePlayer === 1){
    //     activePlayer = 0
    // }else{
    //     activePlayer = 1
    // }
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  //Add current score to global score
  scores[activePlayer] += roundScore;

  //Update the UI(DOM)
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  //Check if current player won the game
  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "CHAMPION";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(`.player-${activePlayer}-panel`)
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
  roundScore = 0;
  // if(activePlayer === 1){
  //     activePlayer = 0
  // }else{
  //     activePlayer = 1
  // }
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

function init(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  
  document.querySelector(".dice").style.display = "none";
  
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector(`.player-0-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("active");
  document.querySelector(`.player-0-panel`).classList.remove("active");
  document.querySelector(`.player-0-panel`).classList.add("active");
  
};
