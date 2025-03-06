//import * as PIXI from "./node_modules/pixi.js/dist/pixi.min.mjs";
//const PIXI = require("pixi.js");
//console.log("PixiJS loaded:", PIXI);
// Create a PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

const GuessingGame = {
    minGenNum: 0,
    maxGenNum: 100,
    guessesMax: 10,
    guessesMade: 0,
    lastGuessesMade: 0,
    numOfWins: 0,
    numOfLosses: 0,
    randomNumber: 50,
    feedbackNumberOfGuessesText: document.getElementById("feedbackNumberOfGuesses"),
    instructionsTextElement: document.getElementById("instructions"),
    inputField: document.getElementById("numberInput"),
    feedbackElement: document.getElementById("feedback"),
    gameStatsElement: document.getElementById("gameStats"),

    setup: function () {
        GuessingGame.fetchFromLocal();
        GuessingGame.genRandomNumber();
        GuessingGame.setInstructions();
        GuessingGame.enableInput();
        GuessingGame.inputField.value = "";
        GuessingGame.inputField.focus();
    },

    setInstructions: function () {
		GuessingGame.instructionsTextElement.textContent = `Guess a number between ${GuessingGame.minGenNum} and ${GuessingGame.maxGenNum}`;
        GuessingGame.gameStatsElement.textContent = `You have Won ${GuessingGame.numOfWins} games and Lost ${GuessingGame.numOfLosses} games.`        
    },

    disableInput: function () {
		GuessingGame.inputField.setAttribute("disabled", true);
		document.getElementById("sendButton").setAttribute("disabled", true);        
    },

    enableInput: function () {
		GuessingGame.inputField.removeAttribute("disabled");
		document.getElementById("sendButton").removeAttribute("disabled");        
    },

    handleNumberInput: function () {
		let userGuess = parseInt(GuessingGame.inputField.value, 10);
		// Bad inpit from user
		if (isNaN(userGuess) || userGuess < GuessingGame.minGenNum || userGuess > GuessingGame.maxGenNum) {
			GuessingGame.feedbackElement.textContent = `Please enter a valid number between ${GuessingGame.minGenNum} and ${GuessingGame.maxGenNum}.`;
			GuessingGame.feedbackElement.style.color = "red";
			GuessingGame.inputField.focus();
			return;
		}  
        // Increment the number of guesses made
        GuessingGame.guessesMade++;
 
        // Exceeded the number of guesses allowed.
		if (GuessingGame.guessesMade > GuessingGame.guessesMax) {
			GuessingGame.numOfLosses++;
			GuessingGame.saveToLocal();
			GuessingGame.disableInput();
			GuessingGame.feedbackElement.textContent = `I'm sorry, you lost. Exceeded the max (${GuessingGame.guessesMax}) number of guesses.`;
		}
        // Guess was too high
		if (userGuess > GuessingGame.randomNumber) {
			GuessingGame.feedbackElement.textContent = `Your guess of ${userGuess}, is Too high! Try again.`;
			GuessingGame.feedbackElement.style.color = "orange";
		} 
        // Guess was too low
		else if (userGuess < GuessingGame.randomNumber) {
			GuessingGame.feedbackElement.textContent = `Your guess of ${userGuess}, is Too low! Try again.`;
			GuessingGame.feedbackElement.style.color = "blue";
		} 
        // Guess was correct, you win!
		else {
			GuessingGame.numOfWins++;
            GuessingGame.lastGuessesMade = GuessingGame.guessesMade;
			GuessingGame.saveToLocal();
            GuessingGame.disableInput();
			GuessingGame.feedbackElement.textContent = `You correcly guessed ${userGuess}, in ${GuessingGame.lastGuessesMade} tries!`;
			GuessingGame.feedbackElement.style.color = "green";
            document.getElementById("sendReset").classList.add("highlight");
		}	
        // Update other fields
		GuessingGame.feedbackNumberOfGuessesText.textContent = `You have made ${GuessingGame.guessesMade} of ${GuessingGame.guessesMax} guesses allowed.`;
		GuessingGame.inputField.value = "";
		GuessingGame.inputField.focus();        
    },
    // Save current data to local storge
    saveToLocal: function () {
		const data = {};
		data.minGenNum = GuessingGame.minGenNum;
		data.maxGenNum = GuessingGame.maxGenNum;
		data.guessesMax = GuessingGame.guessesMax;
		data.guessesMade = GuessingGame.guessesMade;
		data.numOfWins = GuessingGame.numOfWins;
		data.numOfLosses = GuessingGame.numOfLosses;
		data.randomNumber = GuessingGame.randomNumber;
		localStorage.setItem("setting", JSON.stringify(data));        
    },
    // Get last saved info from local storage
    fetchFromLocal: function () {
		if (!localStorage.getItem("setting")) {
			// Just use default values, but with a new random number
			GuessingGame.genRandomNumber();
		} 
		else {
			const data = JSON.parse(localStorage.getItem("setting"));
			GuessingGame.minGenNum = data.minGenNum;
			GuessingGame.maxGenNum = data.maxGenNum;
			GuessingGame.guessesMax = data.guessesMax;
			//GuessingGame.guessesMade = data.guessesMade;
			GuessingGame.numOfWins = data.numOfWins;
			GuessingGame.numOfLosses = data.numOfLosses;
			GuessingGame.randomNumber = data.randomNumber;
			GuessingGame.inputField.setAttribute("min", GuessingGame.minGenNum);
			GuessingGame.inputField.setAttribute("max", GuessingGame.maxGenNum);
			GuessingGame.inputField.setAttribute("placeholder", `From ${GuessingGame.minGenNum} To ${GuessingGame.maxGenNum}`);
		}	        
    },
    // Reset the game
    reset: function () {
		GuessingGame.genRandomNumber(); 
		GuessingGame.guessesMade = 0;
		GuessingGame.saveToLocal();
		GuessingGame.feedbackNumberOfGuessesText.textContent = "";
		GuessingGame.feedbackElement.textContent = "Make your guess!";
		GuessingGame.inputField.value = "";
		GuessingGame.inputField.focus();
		GuessingGame.setInstructions();
		GuessingGame.enableInput();  
        document.getElementById("sendReset").classList.remove("highlight");      
    },

    genRandomNumber: function () {
        GuessingGame.randomNumber = Math.floor(Math.random() * (GuessingGame.maxGenNum - GuessingGame.minGenNum) + GuessingGame.minGenNum);
    }
};
// Setup the game
GuessingGame.setup();
// Event listeners
document.getElementById("numberInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { GuessingGame.handleNumberInput(); }
});
document.getElementById("sendButton").addEventListener("click", GuessingGame.handleNumberInput);
document.getElementById("sendReset").addEventListener("click", GuessingGame.reset);
