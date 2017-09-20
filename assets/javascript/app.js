//Trivia Game Activity 
$(document).ready(function() {
//Testing button to switch from index.html to trivia.html
/* $("#button").click(function() [
	window.location.href = 'trivia.html';
}); */
// Here we are setting up variables to hold info necessary to meet quiz requirements
var right = 0; 
var wrong = 0;
var incomplete = 0;
var options; 
var counterNumber = 0;
var counter = 31;

/*Here we are creating a timer that will start at 31 seconds since once the page is loaded the
timer will start at 30 secs rather than 29secs */
function countDown () {
	$("#seconds").html("<p>Time Remaining: " + counter + " seconds</p>");
	//var timeOut = setInterval(uhOh, 1000);
	function uhOh () {
		if (counter == 0) {
			$("#seconds").html("<p>Time is Officially Up!</p>");
			incomplete++;
			$(".results").html("<div>Correct: " + right + " Incorrect: " + wrong + " Incomplete: " + incomplete + "</div>");
			clearTimeout(timeOut);
		} else {
			counter--;
			$("#seconds").html("<p>Time Remaining: " + counter + " seconds</p>");
		}
	}
	var timeOut = setInterval(uhOh, 1000);
} //Above code doesn't not display the results after time is over. 
//This section and the next section are my biggest issues in creating this game.
		
//Now we create the questions for the quiz beginning by declaring a variable

var quizQuestions = [{
	question: "What is the capital of Croatia?",
	answer: ['Belgrade', 'Sarajevo', 'Dubrovnik', 'Zagreb'],
	correct: "Zagreb"
}, {	
	question: "What's the name of the last Aztec capital?",
	answer: ['Texcoco', 'Tenochtitlan', 'Tlaxcala', 'Teotihuacan'],
	correct: "Tenochtitlan"
}, {
	question: "Which of the following is not a Romance language?",
	answer: ['Catalan', 'Basque', 'Lombard', 'Galician'],
	correct: "Basque"
}, {
	question: "From the four Renaissance artists, which one was a principal architect of St. Peter's Cathedral of the Vatican City?",
	answer: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
	correct: "Michelangelo"	
}, {
	question: "Dracula was said to be from Transylvania. In which modern country is this region located?",
	answer: ['Hungary', 'Bulgaria', 'Romania', 'Moldova'],
	correct: "Romania"
}];
//Now we display the questions along with the answer choices.
function displayQuiz() {
	counter = 31;
	countDown();
	for (var i = 0; i < quizQuestions.length; i++) {
		$("#quizzy").html('<p>' + quizQuestions[i].question + '</p>');

		$("#choices").html('<form>'
			+ '<p><input type="radio" id="dot"> ' + quizQuestions[i].answer[0] + '</p>'
			+ '<p><input type="radio" id="dot"> ' + quizQuestions[i].answer[1] + '</p>'
			+ '<p><input type="radio" id="dot"> ' + quizQuestions[i].answer[2] + '</p>'
			+ '<p><input type="radio" id="dot"> ' + quizQuestions[i].answer[3] + '</p>'
			+ '</form>');
		//Now we add a function that will record the choice the user picks among the answers
		//function pick() {
			//options = document.getElementByID("dot").value; 
		//}
		console.log(quizQuestions[i].question);
		function choice (){
			options = document.getElementByID("dot").value;
		}
	}	
}
displayQuiz();
//The above code is not displaying all the questions I've written onto the webpage.
//I can't find the reason why it's not working since I don't get an error message on the console.
function resetJuego() {
	right = 0;
	wrong = 0;
	incomplete = 0;
	options = null;
	counterNumber = 0;
}

$(".btn-primary").click(resetJuego);

});

