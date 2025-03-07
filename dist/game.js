
/*
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
*/

class GuessingGame {
    constructor() {
        this.minGenNum = 0;
        this.maxGenNum = 100;
        this.guessesMax = 10;
        this.guessesMade = 0;
        this.lastGuessesMade = 0;
        this.numOfWins = 0;
        this.numOfLosses = 0;
        this.randomNumber = 50;

        // Cache elements
        this.inputField = document.getElementById("numberInput");
        this.feedbackElement = document.getElementById("feedback");
        this.feedbackNumberOfGuessesText = document.getElementById("feedbackNumberOfGuesses");
        this.instructionsTextElement = document.getElementById("instructions");
        this.gameStatsElement = document.getElementById("gameStats");
        this.sendButtonElement = document.getElementById("sendButton");
        this.sendResetElement = document.getElementById("sendReset");
		this.openSettingsButtonElement = document.getElementById("openSettingsButton");

        // Bind event listeners correctly
        this.sendButtonElement.addEventListener("click", () => this.handleNumberInput());
        this.sendResetElement.addEventListener("click", () => this.reset());
		this.openSettingsButtonElement.addEventListener("click", () => {
			document.getElementById("settingsModal").style.display = "block";
		});
        this.inputField.addEventListener("keydown", (event) => {
            if (event.key === "Enter") this.handleNumberInput();
        });
		// Settings related events
		this.openSettingsButtonElement.addEventListener("click", () => {
			document.getElementById("minNumber").value = this.minGenNum;
			document.getElementById("maxNumber").value = this.maxGenNum;
			document.getElementById("maxGuesses").value = this.guessesMax;
			document.getElementById("settingsModal").style.display = "block";
		});
		document.getElementById("closeSettingsButton").addEventListener("click", () => {
			document.getElementById("settingsModal").style.display = "none";
		});
		document.getElementById("saveSettingsButton").addEventListener("click", () => {
			const minNum = parseInt(document.getElementById("minNumber").value, 10);
			const maxNum = parseInt(document.getElementById("maxNumber").value, 10);
			const maxGuesses = parseInt(document.getElementById("maxGuesses").value, 10);
		
			if (isNaN(minNum) || isNaN(maxNum) || isNaN(maxGuesses) || minNum >= maxNum || maxGuesses < 1) {
				return;
			}
		
			this.minGenNum = minNum;
			this.maxGenNum = maxNum;
			this.guessesMax = maxGuesses;
			// Save to local storage
			this.saveToLocal();
			// Reset game with new settings
			this.reset();
			document.getElementById("settingsModal").style.display = "none";
		});		
        /*
        // Alternate Syntax:
        document.getElementById("sendButton").addEventListener("click", this.handleNumberInput.bind(this));
        document.getElementById("sendReset").addEventListener("click", this.reset.bind(this));
		*/
        this.setup();
    }

    setup() {
        this.fetchFromLocal();
        this.genRandomNumber();
        this.setInstructions();
        this.enableInput();
        //this.inputField.value = "";
        //this.inputField.focus();
    }

    setInstructions() {
        this.instructionsTextElement.textContent = `Guess a number between ${this.minGenNum} and ${this.maxGenNum}`;
        this.gameStatsElement.textContent = `You have Won ${this.numOfWins} games and Lost ${this.numOfLosses} games.`;
		this.inputField.setAttribute("min", this.minGenNum);
		this.inputField.setAttribute("max", this.maxGenNum);
		this.inputField.setAttribute("placeholder", `From ${this.minGenNum} to ${this.maxGenNum}`);
    }

    disableInput() {
        this.inputField.setAttribute("disabled", true);
        this.sendButtonElement.setAttribute("disabled", true);
    }

    enableInput() {
        this.inputField.removeAttribute("disabled");
        this.sendButtonElement.removeAttribute("disabled");
        this.inputField.value = "";
        this.inputField.focus();
    }

    handleNumberInput() {
        let userGuess = parseInt(this.inputField.value, 10);

        if (isNaN(userGuess) || userGuess < this.minGenNum || userGuess > this.maxGenNum) {
            this.feedbackElement.textContent = `Please enter a number between ${this.minGenNum} and ${this.maxGenNum}.`;
            this.feedbackElement.style.color = "red";
            this.inputField.focus();
            return;
        }

        this.guessesMade++;

        if (this.guessesMade >= this.guessesMax) {
            this.numOfLosses++;
            this.saveToLocal();
            this.disableInput();
            this.feedbackElement.textContent = `I'm sorry, you lost. Max (${this.guessesMax}) guesses exceeded. The number was ${this.randomNumber}`;
            return;
        }

        if (userGuess > this.randomNumber) {
            this.feedbackElement.textContent = `Your guess of ${userGuess}, is Too high! Try again.`;
            this.feedbackElement.style.color = "orange";
        } 
        else if (userGuess < this.randomNumber) {
            this.feedbackElement.textContent = `Your guess of ${userGuess}, is Too low! Try again.`;
            this.feedbackElement.style.color = "blue";
        } 
        else {
            this.numOfWins++;
            this.lastGuessesMade = this.guessesMade;
            this.saveToLocal();
            this.disableInput();
            this.feedbackElement.textContent = `Correct! You guessed ${userGuess} in ${this.lastGuessesMade} tries!`;
            this.feedbackElement.style.color = "green";
            this.sendResetElement.classList.add("highlight");
        }

        this.feedbackNumberOfGuessesText.textContent = `You have made ${this.guessesMade} of ${this.guessesMax} guesses allowed.`;
        this.inputField.value = "";
        this.inputField.focus();
    }

    saveToLocal() {
        const data = {
            "minGenNum": this.minGenNum,
            "maxGenNum": this.maxGenNum,
            "guessesMax": this.guessesMax,
            "numOfWins": this.numOfWins,
            "numOfLosses": this.numOfLosses
        };
        localStorage.setItem("setting", JSON.stringify(data));
    }

    fetchFromLocal() {
        if (!localStorage.getItem("setting")) {
            this.genRandomNumber();
        } 
        else {
            const data = JSON.parse(localStorage.getItem("setting"));
            this.minGenNum = data.minGenNum;
            this.maxGenNum = data.maxGenNum;
            this.guessesMax = data.guessesMax;
            this.numOfWins = data.numOfWins;
            this.numOfLosses = data.numOfLosses;
        }
    }

    reset() {
        this.genRandomNumber();
        this.guessesMade = 0;
        this.saveToLocal();
        this.setInstructions();
        this.enableInput();
        this.feedbackNumberOfGuessesText.textContent = "";
        this.feedbackElement.textContent = "Make your guess!";
        this.sendResetElement.classList.remove("highlight");
    }

    genRandomNumber() {
        this.randomNumber = Math.floor(Math.random() * (this.maxGenNum - this.minGenNum + 1) + this.minGenNum);
    }
}

// Initialize game
const game = new GuessingGame();