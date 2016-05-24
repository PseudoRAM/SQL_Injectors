document.getElementById('button').onclick = function() {
	var flag = false;
	for (var i = 1; i <= 10; i++) {
		for (var j = 0; j < 4; j++) {
			if (document.getElementsByName('q' + i).item(j).checked) {
				flag = true;
			}
		}
		if (!flag) {
			alert("You're not finished yet!");
			break;
		}
		flag = false;
	}
	var score = 0;
	for (var k = 1; k <= 10; k++) {
		score = score + document.getElementById('q' + k + 'd').checked;
	}

	alert("You scored " + score + " out of ten. Good Job!");
};
