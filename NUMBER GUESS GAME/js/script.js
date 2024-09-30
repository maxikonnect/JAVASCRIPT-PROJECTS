const guessNumberRange = document.getElementById("guessNumberRange");
const validNumber = document.getElementById("validNumber");
const guessNumber = document.getElementById("guess_number");
const guessSubmit = document.getElementById("guess_submit");
const guessUpdate = document.getElementById("guessUpdate");
const lowOrHi = document.getElementById("lowOrHi");
const attemptsLeft = document.getElementById("attemptsLeft");
let gameresultdisplay = document.querySelector(".gameresultdisplay");
let displayResult = document.getElementById("displayResults"); 
let resetBut = document.getElementById("resetBut");

let min = 1; // Minimum User Guess Value
let max = 100; // Maximum User Guess value
let guessCount = 1;

// Function that generates user attempts 
const userAttemptsGenerator = function() {
    let difference = max - min;
    let attempts;

    if (difference >= 50 && difference <= 100) {
        attempts = Math.floor((difference) / 10);
    } else if (difference >= 100 && difference <= 200) {
        attempts = Math.floor(difference / 15);
    } else if (difference >= 200 && difference <= 500) {
        attempts = Math.floor(difference / 20);
    }
    return attempts;
};

let userAttempts = userAttemptsGenerator();
console.log(userAttempts);

// Function to Display Guess Range ON Screen 
function displayGuessRange() {
    guessNumberRange.innerHTML = `Guess the correct number between ${min} and ${max}. <br>  
    You have ${userAttempts} attempts to guess the correct number.`;
}
displayGuessRange();

// Random Number Generator Function
const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randomNumber = randomNumberGenerator(min, max);
guessSubmit.addEventListener("click", startGame);

function startGame() {
    validNumber.classList.add("validNumberColor");
    if (guessNumber.value < min || guessNumber.value > max || isNaN(guessNumber.value)) {
        validNumber.textContent = `Enter a valid number between ${min} and ${max}`;
        return;
    } else {
        gameresultdisplay.classList.add("gameresultdisplayColor");
        let guesses = Number(guessNumber.value);
        validNumber.textContent = "";
        validNumber.classList.remove("validNumberColor");
        attemptsLeft.textContent = `You have ${userAttempts - guessCount} chance(s) left to guess the correct Number`;

        if (guessCount == 1) {
            guessUpdate.textContent = `Previous Guesses:  `;
        }
        guessUpdate.textContent = `${guessUpdate.textContent} ${guesses}`;

        if (guesses === randomNumber) {
            displayResult.innerHTML = "CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER. <br> YOU WIN";
            displayResult.classList.add("winOrLose");
            displayResult.style.backgroundColor = "red";
            displayResult.style.color = "white";
            lowOrHi.textContent = "";
            attemptsLeft.textContent = "";
            setGameOver();
        } else {
            if (guessCount === userAttempts) {
                displayResult.innerHTML = "GAME OVER YOU LOSE. <br> TRY AGAIN " + "CORRECT GUESS: " + randomNumber;
                displayResult.classList.add("winOrLose");
                lowOrHi.textContent = "";
                attemptsLeft.textContent = "";
                setGameOver();
            } else {
                lowOrHi.textContent = guesses < randomNumber ? 
                    "Guessed Number is low. Guess Again" : 
                    "Guessed Number is high. Guess Again";
            }
        }
    }

    guessCount++;
    guessNumber.focus();
    guessNumber.value = "";
}

function setGameOver() {
    guessNumber.disabled = true; 
    guessSubmit.disabled = true;

    // Create the reset button if it doesn't already exist
    if (!resetBut.querySelector(".resetButton")) {
        const resetButton = document.createElement("button");
        resetButton.textContent = "START A NEW GAME";
        resetButton.classList.add("resetButton");
        resetBut.append(resetButton);
        resetButton.addEventListener("click", resetGame);
    }
}

function resetGame() {
    guessNumber.disabled = false;
    guessSubmit.disabled = false;
    displayResult.textContent = "";
    lowOrHi.textContent = "";
    guessUpdate.textContent = "";
    attemptsLeft.textContent = "";
    gameresultdisplay.classList.remove("gameresultdisplayColor");
    displayResult.classList.remove("winOrLose");

    // Reset game state
    guessCount = 1;
    randomNumber = randomNumberGenerator(min, max); // Generate a new random number
    userAttempts = userAttemptsGenerator(); // Generate a new number of attempts
    displayGuessRange(); // Update the displayed guess range
    
    // Remove the reset button after resetting the game
    const resetButton = resetBut.querySelector(".resetButton");
    if (resetButton) {
        resetBut.removeChild(resetButton);
    }

    guessNumber.focus();
}
