// inline scripts - in the top of the HTML, inside <head>

// USE:
// Javascript inline scripts Link
// <script src="top.js"></script>
// ....
// <p class="center star-container">
// 	<script>displayRating();</script>
// 	Thanks for rating:&nbsp;
// </p>;

let userNew2;

function yourName() {
	userNew2 = prompt('What is your name');

	// Check prompt input and set default user
	if (!userNew2) {
		userNew2 = 'user';
	}

	return document.write(userNew2);
}

function timeOfDay() {
	let time = prompt('Hi ' + userNew2 + ', what hour is it? (0 - 23)');
	let message;

	if (time < 12) {
		message = 'Good morning ' + userNew2;
	} else if (time <= 18) {
		message = 'Good afternoon ' + userNew2;
	} else if (time < 24) {
		message = 'Good night ' + userNew2;
	} else {
		message = 'That hour does not exist ' + userNew2;
	}

	return message;
}

// inline function displayRating
function displayRating() {
	let output = '';

	let rating = prompt('Scale our cookies on a of 1 to 5, how many stars');

	for (let i = 0; i < rating; i++) {
		output += "<img class='star' src='images/star.svg' alt= 'rating star' >";
	}
	return document.write(output);
}
