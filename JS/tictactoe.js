$(document).ready(function () {
	var player = 1;
	var table = $("table");
	var message = $(".message");
	var turn = $(".turn");
	var progress = 0;
	// using jQuery UI button.
	$("input[type=reset]").button();
	// making the tictac toe resizable within a containment
	$("#resizable").resizable({
		containment: "#container",
	});
	$(document).tooltip();
	displayNextPlayer(turn, player);
	// progressbar to indicate progress of game.
	$("#progressbar").progressbar({ value: progress });
	$("td").click(function () {
		td = $(this);
		// pattern variable is used to store cross or circle value.
		// Cross is for player 1
		// circle is for plater 2
		var pattern;
		if (td.hasClass("cross") || td.hasClass("circle")) {
			message.html("This box is already checked.");
		} else {
			if (player == 1) {
				pattern = "cross";
			} else {
				pattern = "circle";
			}
			// adding cross or circle class as per pattern provided
			td.addClass(pattern);
			// checking each time whether player has won or not.
			if (checkIfPlayerWon(table, pattern)) {
				message.html("Player " + player + " has won.");
				turn.html("");
				progress = 100;
			} else {
				progress = progress + 10;
				// to toggle between player 1 and 2 after each turn.
				player = setNextPlayer(player);
				message.html("");
				displayNextPlayer(turn, player);
			}
		}
		$("#progressbar").progressbar({ value: progress });
	});
	// reset all td value to empty. also set player 1 amd change the progress bar to 0.
	$("input[type=reset]").click(function () {
		player = 1;
		message.html("");
		table.find("td").each(function () {
			$(this).removeClass("circle").removeClass("cross");
		});
		progress = 0;
		$("#progressbar").progressbar({ value: progress });
		displayNextPlayer(turn, player);
	});
});
function setNextPlayer(player) {
	if (player == 1) {
		return (player = 2);
	} else {
		return (player = 1);
	}
}
// displaying player number 1 or 2
function displayNextPlayer(turn, player) {
	turn.html("Player turn : " + player);
}
// There is only eight possible way of winning a tic tac toe game which are listed below.
function checkIfPlayerWon(table, pattern) {
	var won = 0;
	if (
		table.find(".box1").hasClass(pattern) &&
		table.find(".box2").hasClass(pattern) &&
		table.find(".box3").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box4").hasClass(pattern) &&
		table.find(".box5").hasClass(pattern) &&
		table.find(".box6").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box7").hasClass(pattern) &&
		table.find(".box8").hasClass(pattern) &&
		table.find(".box9").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box1").hasClass(pattern) &&
		table.find(".box4").hasClass(pattern) &&
		table.find(".box7").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box2").hasClass(pattern) &&
		table.find(".box5").hasClass(pattern) &&
		table.find(".box8").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box3").hasClass(pattern) &&
		table.find(".box6").hasClass(pattern) &&
		table.find(".box9").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box1").hasClass(pattern) &&
		table.find(".box5").hasClass(pattern) &&
		table.find(".box9").hasClass(pattern)
	) {
		won = 1;
	} else if (
		table.find(".box3").hasClass(pattern) &&
		table.find(".box5").hasClass(pattern) &&
		table.find(".box7").hasClass(pattern)
	) {
		won = 1;
	}
	return won;
}
