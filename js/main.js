const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";


// ---------------- GAME LOGIC ----------------------------------//
var simon = {
	sendColor: function(color) {

		// Start a new game
		if(simon.sequence.length === 0) {
			simon.nextSequence();
		} else {
			// Go to next step/sequence
			if (color === simon.sequence[simon.step]) {
				if (simon.step === simon.sequence.length -1) {
					console.log("sequence complete!");
					simon.step = 0;
					simon.nextSequence();
				} else {
					simon.step++;
				}
			} else {
				// Lose condition and reset sequence
				alert("WRONG ANSWER!");
				simon.sequence = [];
				simon.step = 0;
			}
		}
		console.log("NEW COLOR: " + color);
	},
	sequence: [],
	colors: [RED, BLUE, YELLOW, GREEN],
	step: 0,
	nextSequence: function() {
		var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)]
		console.log("the random color is ", nextColor);
		simon.sequence.push(nextColor);
		console.log("the squence ", simon.sequence);
	}
};

// Click functionality for simon squares
$(document).ready(function() {
$("#red").click(function(){simon.sendColor(RED)});
$("#blue").click(function(){simon.sendColor(BLUE)});
$("#yellow").click(function(){simon.sendColor(YELLOW)});
$("#green").click(function(){simon.sendColor(GREEN)});
});

