function MPCalculator() {

	const currentMPInput = document.getElementById("mp-calculator-current");
	const targetMPInput = document.getElementById("mp-calculator-target");
	const calculatorButton = document.getElementById("mp-calculator-button");
	const calculatorExperienceOutput = document.getElementById("mp-calculator-experience");

	calculatorButton.onclick = function() {

		var currentMP = parseInt(currentMPInput.value);
		var targetMP = parseInt(targetMPInput.value);
		var xp = 0;

		if (isNaN(currentMP) || currentMP <= 0) { return; }
		if (isNaN(targetMP) || targetMP <= 0 || targetMP <= currentMP) { return; }

		var bigIncrements = parseInt((targetMP - currentMP) / 250);
		var smallIncrements = Math.ceil((targetMP - currentMP - (bigIncrements * 250)) / 25);

		// Big Increments - 250's
		// Sum of Consequtive Numbers Formula
		bigXP = bigIncrements * (currentMP + (currentMP + (bigIncrements - 1) * 250)) / 2; // Summation Part
		bigXP = bigXP * 5000; // Multiplicative Factor
		MP = currentMP + (bigIncrements * 250);

		// Small Increments - 25's
		smallXP = smallIncrements * (MP + (MP + (smallIncrements - 1) * 25)) / 2; // Summation Part
		smallXP = smallXP * 500;

		xp = bigXP + smallXP;

		calculatorExperienceOutput.value = xp.toLocaleString("en-US");
	}
}

if (document.getElementById("mp-calculator") != null) {
	MPCalculator()
}

