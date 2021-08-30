function maxStatsCalculator() {

	const calculatorTarget = document.getElementById("calculator-target");
	const calculatorHP = document.getElementById("calculator-hp");
	const calculatorButton = document.getElementById("calculator-button");
	const calculatorExperience = document.getElementById("calculator-experience");

	const currentStrBox = document.getElementById("calculator-current-str");
	const currentIntBox = document.getElementById("calculator-current-int");
	const currentWisBox = document.getElementById("calculator-current-wis");
	const currentConBox = document.getElementById("calculator-current-con");
	const currentDexBox = document.getElementById("calculator-current-dex");

	const targetStrBox = document.getElementById("calculator-target-str");
	const targetIntBox = document.getElementById("calculator-target-int");
	const targetWisBox = document.getElementById("calculator-target-wis");
	const targetConBox = document.getElementById("calculator-target-con");
	const targetDexBox = document.getElementById("calculator-target-dex");

	calculatorTarget.onchange = function() {

		var target = calculatorTarget.value

		if (target == "monk") {
			targetStrBox.value = "180";
			targetIntBox.value = "150";
			targetWisBox.value = "100";
			targetConBox.value = "215";
			targetDexBox.value = "100";
		} else if (target == "priest") {
			targetStrBox.value = "100";
			targetIntBox.value = "180";
			targetWisBox.value = "215";
			targetConBox.value = "150";
			targetDexBox.value = "100";
		} else if (target == "rogue") {
			targetStrBox.value = "180";
			targetIntBox.value = "100";
			targetWisBox.value = "100";
			targetConBox.value = "150";
			targetDexBox.value = "215";
		} else if (target == "warrior") {
			targetStrBox.value = "215";
			targetIntBox.value = "100";
			targetWisBox.value = "100";
			targetConBox.value = "180";
			targetDexBox.value = "150";
		} else if (target == "wizard") {
			targetStrBox.value = "100";
			targetIntBox.value = "215";
			targetWisBox.value = "180";
			targetConBox.value = "150";
			targetDexBox.value = "100";
		}
	}

	calculatorButton.onclick = function() {

		var hp = parseInt(calculatorHP.value);

		var currentStr = parseInt(currentStrBox.value);
		var currentInt = parseInt(currentIntBox.value);
		var currentWis = parseInt(currentWisBox.value);
		var currentCon = parseInt(currentConBox.value);
		var currentDex = parseInt(currentDexBox.value);

		var targetStr = parseInt(targetStrBox.value);
		var targetInt = parseInt(targetIntBox.value);
		var targetWis = parseInt(targetWisBox.value);
		var targetCon = parseInt(targetConBox.value);
		var targetDex = parseInt(targetDexBox.value);

		var current = [currentStr, currentInt, currentWis, currentCon, currentDex];
		var target = [targetStr, targetInt, targetWis, targetCon, targetDex];

		if (isNaN(hp) || hp <= 0) { return; }

		total = 0;

		for (let i = 0; i < current.length; i++)
		{
			if (isNaN(current[i]) || isNaN(target[i])) { continue; }
			if (current[i] >= target[i] || current[i] <= 0) { continue; }

			calculatorExperience.value = current[i];

			// Sum of Consequtive Numbers Formula
			n = (target[i] - 1) - current[i] + 1;
			xp = n * (current[i] + (target[i] - 1)) / 2; // Summation Part

			xp = xp * hp * 17; // Multiplicative Factor
			total += xp;
		}

		calculatorExperience.value = total.toLocaleString("en-US");

	}
}

if (document.getElementById("max-stats-calculator") != null) {
	maxStatsCalculator()
}

