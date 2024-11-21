const randomnum = Math.floor(Math.random() * 100) + 1;
const inputfield = document.querySelector("#inpufield");
const submit = document.querySelector("#sub");
const Previousguess = document.getElementById("Previousguess");
const Remainingguess = document.getElementById("Remainingguess");
let guesses = 10;
const elementarray = [];
console.log(randomnum)
const checkValue = (message) => {
    if (message === "" || isNaN(message) || message <= 0 || message > 100) {
        alert("Please provide a valid number between 1 and 100.");
    } else {
        numberCheck(parseInt(message));
        guesses--;
        Remainingguess.innerText = guesses;
    }
};

submit.addEventListener("click", () => {
    checkValue(inputfield.value);
    inputfield.value = "";
});

// Add event listener for Enter key press
inputfield.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        submit.click(); // Simulate click on the submit button
    }
});

const numberCheck = (number) => {
    if (guesses === 0) {
        endGame();
    } else {
        elementarray.push(number);
        Previousguess.innerText = elementarray.join(", ");
        const messageElement = document.createElement("p");
        if (number < randomnum) {
            messageElement.innerText = `Number ${number} is less than the desired number.`;
        } else if (number > randomnum) {
            messageElement.innerText = `Number ${number} is greater than the desired number.`;
        } else {
            messageElement.innerText = "Congratulations! You guessed the right number.";
            document.querySelector(".result").appendChild(messageElement);
            endGame();
            return; // Exit the function early to prevent further execution
        }
        const existingMessage = document.querySelector(".result p");
        if (existingMessage) {
            existingMessage.innerText = messageElement.innerText;
        } else {
            document.querySelector(".result").appendChild(messageElement);
        }
    }
};

const endGame = () => {
    guesses = 10;
    elementarray.length = 0;
    Previousguess.innerText = "";
    Remainingguess.innerText = guesses;
    randomnum = Math.floor(Math.random() * 100) + 1; // Generate a new random number
};
