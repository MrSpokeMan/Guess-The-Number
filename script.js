'use strict';

// console.log(document.querySelector(`.message`).textContent);
// //querySelector wybiera tag z html, a text content wyświetla zawartośc tego taga
// document.querySelector(`.message`).textContent = `Correct Number!`;
// // przypisywanie do text content zmieniamy zawartość tagu i zmienia się na zawsze

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //losuje jedną od 0 do 1, trunc zaokrągal
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

//addEventListener dodaje wydarzenie, które później definiujemy poprzez funkcję, ona się odbywa tyko wtedy kiedy wykonamy spodziewane dziąłanie
document.querySelector('.guess').addEventListener('keyup', function (e) {

	if (e.key === `Enter`) {
		e.preventDefault();
		document.querySelector('.check').click()

		const guess = Number(document.querySelector('.guess').value);
		console.log(guess, typeof guess);

		// When there is no input
		if (!guess) {
			// document.querySelector('.message').textContent = '⛔️ No number!';
			displayMessage('⛔️ Brak cyfry!');

			// When player wins
		} else if (guess === secretNumber) {
			// document.querySelector('.message').textContent = '🎉 Correct Number!';
			displayMessage('🎉 Poprawna cyfra!');
			document.querySelector('.number').textContent = secretNumber;

			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width = '30rem';

			if (score > highscore) {
				highscore = score;
				document.querySelector('.highscore').textContent = highscore;
			}

			// When guess is wrong
		} else if (guess !== secretNumber) {
			if (score > 1) {
				// document.querySelector('.message').textContent =
				// guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
				displayMessage(guess > secretNumber ? '📈 Za dużo!' : '📉 Za mało!');
				score--;
				document.querySelector('.score').textContent = score;
			} else {
				// document.querySelector('.message').textContent = '💥 You lost the game!';
				displayMessage('💥 Przegrałeś/aś!');
				document.querySelector('.score').textContent = 0;
			}
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Zacznij zgadywanie...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});