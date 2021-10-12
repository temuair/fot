function HPCalculator() {

	const currentHPInput = document.getElementById("hp-calculator-current");
	const targetHPInput = document.getElementById("hp-calculator-target");
	const calculatorButton = document.getElementById("hp-calculator-button");
	const calculatorExperienceOutput = document.getElementById("hp-calculator-experience");

	calculatorButton.onclick = function() {

		var currentHP = parseInt(currentHPInput.value);
		var targetHP = parseInt(targetHPInput.value);
		var xp = 0;

		if (isNaN(currentHP) || currentHP <= 0) { return; }
		if (isNaN(targetHP) || targetHP <= 0 || targetHP <= currentHP) { return; }

		var bigIncrements = parseInt((targetHP - currentHP) / 500);
		var smallIncrements = Math.ceil((targetHP - currentHP - (bigIncrements * 500)) / 50);

		// Big Increments - 500's
		// Sum of Consequtive Numbers Formula
		bigXP = bigIncrements * (currentHP + (currentHP + (bigIncrements - 1) * 500)) / 2; // Summation Part
		bigXP = bigXP * 5000; // Multiplicative Factor
		HP = currentHP + (bigIncrements * 500);

		// Small Increments - 50's
		smallXP = smallIncrements * (HP + (HP + (smallIncrements - 1) * 50)) / 2; // Summation Part
		smallXP = smallXP * 500;

		xp = bigXP + smallXP;

		calculatorExperienceOutput.value = xp.toLocaleString("en-US");
	}
}

if (document.getElementById("hp-calculator") != null) {
	HPCalculator()
}

