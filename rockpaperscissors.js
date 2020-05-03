const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
let countPWins = 0;
let countCWins = 0;

rock.addEventListener('click', (e) => {
    playRound(rock.id, computerPlay())
});

paper.addEventListener('click', (e) => {
    playRound(paper.id, computerPlay())
});

scissors.addEventListener('click', (e) => {
    playRound(scissors.id, computerPlay())
});

//outputs given game outcome
function playRound(playerSelection, computerSelection) {
    if (playerWins(playerSelection, computerSelection) == 0) {
        declareRoundWinnder(playerSelection, computerSelection, 0)
    }
    else if (playerWins(playerSelection, computerSelection) == 1){
        declareRoundWinnder(computerSelection, playerSelection, 1)
    }
    else {
        declareRoundWinnder(computerSelection, playerSelection, 2)
    }
}

//Returns 0 if player wins, 1 if computerselection wins, and 2 if it is a tie (2 is never returned)
function playerWins(playerSelection, computerSelection) {
    playerSelects = normalize(playerSelection)
    if (playerSelects == "Rock") {
        if (computerSelection == "Scissors") {
            return 0
        }
        else if (computerSelection == "Paper") {
            return 1
        }
        else {
            return 2
        }
    }
    else if (playerSelects == "Paper") {
        if (computerSelection == "Rock") {
            return 0
        }
        else if (computerSelection == "Scissors") {
            return 1
        }
        else {
            return 2
        }
    }
    else if (playerSelects == "Scissors") {
        if (computerSelection == "Paper") {
            return 0
        }
        else if (computerSelection == "Rock") {
            return 1
        }
        else {
            return 2
        }
    }
    else {
        return 2
    }
}

//converts given string to have the first char capitalized and rest undercase
function normalize(choice) {
    if (choice !== null) {
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase()
    }
    else {
        return choice;
    }
}


//generates computer's move
function computerPlay() {    
    num = Math.floor(Math.random() * 3)
        if (num < 1) {
            return "Rock"
        }
        else if (num < 2) {
            return "Paper"
        }
        else {
            return "Scissors"
        }
    }

//declares winner, if scores are tied then user broke the game
function declareWinner(countPlayerWins, countComputerWins) {
    if (countPlayerWins > countComputerWins) {
        let round = document.querySelector('#round-result');
        round.textContent="Congratulations! You've won!";
    }
    else if (countComputerWins > countPlayerWins) {
        let round = document.querySelector('#round-result');
        round.textContent=`You Lost! Maybe this game isn't for you?`;
    }
    else {
        let round = document.querySelector('#round-result');
        round.textContent=`You broke the game! Congrats!`;
    }
} 

//declares round winnder in console
function declareRoundWinnder(winner, loser, num) {
    if (num == 0) {
        countPWins++;
        let score = document.querySelector('#your-score');
        score.textContent=`Your Score: ${countPWins}`;
        let round = document.querySelector('#round-result');
        round.textContent=`You Win! ${winner} beats ${loser}`;
        if (countPWins >= 5) {
            declareWinner(countPWins, countCWins);
        }
    }
    else if (num == 1) {
        countCWins++;
        let score = document.querySelector('#comp-score');
        score.textContent=`Computer's Score: ${countCWins}`;
        let round = document.querySelector('#round-result');
        round.textContent=`You Lose! ${winner} beats ${loser}`;
        if (countCWins >= 5) {
            declareWinner(countPWins, countCWins);
        }
    }
    else {
        let round = document.querySelector('#round-result');
        round.textContent=`You Tied! ${winner} is the same as ${loser}`;
    }


}