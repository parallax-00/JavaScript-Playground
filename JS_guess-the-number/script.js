// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
var prevGuess = document.getElementById('guesses');
var remainingGuesses = document.getElementById('remainingGuesses').innerHTML;
var numGuess = 0;
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(document.querySelector('#guessField').value);
    console.log(guess);
    if (isNaN(guess) || guess == 0 || guess > 100) {
        alert("Please enter a valid number rangning from 1 to 100")
    } else {
        if (guess == randomNumber) {
            alert("YOU WON!!!, the number " + guess + " is the right answer. Refresh the page to play again.");
            prevGuess.innerHTML = ("Perfect");
            remainingGuesses = `${11 - numGuess}`
        } else if (guess != randomNumber) {
            numGuess++;
            if (guess > randomNumber) { prevGuess.innerHTML = ("Too big number") }
            if (guess < randomNumber) { prevGuess.innerHTML = ("Too small number") }
            console.log("here might be the problem--line18");
            remainingGuesses - 1;
            if (remainingGuesses == 0) {
                alert("You Lost!");
                form.setAttribute('disabled', '')
            }
        }
            
    }
})
