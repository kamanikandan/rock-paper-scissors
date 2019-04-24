var startGame = function() {
  let playerScore = 0;
  let opponentScore = 0;

  //Selecting Elements
  let mainSection = document.querySelector(".main-content");
  let introSection = document.querySelector(".intro");
  let playerOptions = document.querySelectorAll(".selection-wrapper i");
  let winnerSection = document.querySelector(".winner-section");
  let winnerOverlay = document.querySelector(".winner-overlay");
  let playButton = document.querySelector(".intro button");
  let rePlayButton = document.getElementById("rePlay");
  let whoWon = document.getElementById("who-won");
  let computerOptions = ["rock", "paper", "scissors"];
  console.log("Test");
  //FadeOut Intro and Show Game page
  playButton.addEventListener("click", function() {
    introSection.classList.add("fadeOut");
    mainSection.classList.add("fadeIn");
  });

  //Adding Click Event for each options //Updated for IE Compatability
  for (let i = 0; i < playerOptions.length; i++) {
    playerOptions[i].addEventListener("click", function(e) {
      let playerSelection = e.target.dataset.selected;
      let oppponentSelection = computerOptions[Math.floor(Math.random() * 3)];
      let elOpponentSelected = document.getElementById("opponent-selected");
      elOpponentSelected.setAttribute(
        "class",
        "far fa-hand-" + oppponentSelection
      );
      compareMatch(playerSelection, oppponentSelection);
      checkWinner();
    });
  }

  //Compare player Selection with opponent Selection
  function compareMatch(playerSelection, oppponentSelection) {
    if (playerSelection === oppponentSelection) {
      whoWon.textContent = "It's a tie!";
      console.log("It's a tie!");
      return;
    }
    if (playerSelection === "rock") {
      if (oppponentSelection === "paper") {
        opponentScore++;
        displayScore();
        whoWon.textContent = "You lose... Opponent's won!";
        return;
      } else {
        playerScore++;
        displayScore();
        whoWon.textContent = "You have won!";
        return;
      }
    }
    if (playerSelection === "paper") {
      if (oppponentSelection === "scissors") {
        opponentScore++;
        displayScore();
        whoWon.textContent = "You lose... Opponent's won!";
        return;
      } else {
        playerScore++;
        displayScore();
        whoWon.textContent = "You have won!";
        return;
      }
    }
    if (playerSelection === "scissors") {
      if (oppponentSelection === "rock") {
        opponentScore++;
        displayScore();
        whoWon.textContent = "You lose... Opponent's won!";
        return;
      } else {
        playerScore++;
        displayScore();
        whoWon.textContent = "You have won!";
        return;
      }
    }
  }

  //Add Event to re-play the Game
  rePlayButton.addEventListener("click", rePlay);

  //Replay function
  function rePlay() {
    playerScore = 0;
    opponentScore = 0;
    winnerSection.classList.add("fadeOut");
    winnerSection.classList.remove("fadeIn");
    winnerOverlay.classList.add("fadeOut");
    winnerOverlay.classList.remove("fadeIn");
    displayScore();
    whoWon.textContent = "";
  }

  //To Check Who is the Winner of the Game
  function checkWinner() {
    let winnerScore = document.getElementById("winnerScore");
    let loserScore = document.getElementById("loserScore");
    let winner = document.getElementById("winner");

    if (playerScore === 3 && opponentScore < 3) {
      showWinnerBox();
      winnerScore.textContent = playerScore;
      loserScore.textContent = opponentScore;
      winner.textContent = "YOU";
    } else if (opponentScore === 3 && playerScore < 3) {
      showWinnerBox();
      winnerScore.textContent = opponentScore;
      loserScore.textContent = playerScore;
      winner.textContent = "OPPONENT";
    }
  }

  //Show Winner Pop-up
  function showWinnerBox() {
    winnerSection.classList.remove("fadeOut");
    winnerSection.classList.add("fadeIn");
    winnerOverlay.classList.remove("fadeOut");
    winnerOverlay.classList.add("fadeIn");
  }

  //Update and Display the Score
  function displayScore() {
    let elPlayerScore = document.getElementById("player-score");
    let elOpponentScore = document.getElementById("opponent-score");
    elPlayerScore.textContent = playerScore;
    elOpponentScore.textContent = opponentScore;
  }
};
//Initialize Game
startGame();
