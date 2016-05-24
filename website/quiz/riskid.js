document.getElementById('button').onclick = function() {
	var flag, trueflag = false;
	for (var i = 1; i <= 10; i++) {
		for (var j = 0; j < 4; j++) {
			if (document.getElementsByName('q' + i).item(j).checked) {
				flag = true;
			}
		}
		if (!flag) {
			alert("You're not finished yet!");
			return 0;
		}
		flag = false;
	}
	var score = 0;
	for (var k = 1; k <= 10; k++) {
		score = score + document.getElementById('q' + k + 'd').checked;
	}
	if (score === 0) {
		alert("You are at almost no risk! Congratulations!");
		return 0;
	} if (score < 3) {
		alert("You are at very low risk, nice!");
		return 0;
	} if (score < 6) {
		alert("You are at a moderate risk. Consider lifestyle changes.");
		return 0;
	} else {
		alert("You are at high risk. Lifestyle changes are strongly recommended.");
		return 0;
	}
};
