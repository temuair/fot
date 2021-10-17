function statsCalculator() {

	const classSelection = document.getElementById("stats-calculator-class");
	const transcendedCheckbox = document.getElementById("stats-calculator-transcended");
	const HPBox = document.getElementById("stats-calculator-hp");
	const XPBox = document.getElementById("stats-calculator-experience");
	const calculateButton = document.getElementById("stats-calculator-button");

	const currentStrBox = document.getElementById("stats-calculator-current-str");
	const currentIntBox = document.getElementById("stats-calculator-current-int");
	const currentWisBox = document.getElementById("stats-calculator-current-wis");
	const currentConBox = document.getElementById("stats-calculator-current-con");
	const currentDexBox = document.getElementById("stats-calculator-current-dex");

	const targetStrBox = document.getElementById("stats-calculator-target-str");
	const targetIntBox = document.getElementById("stats-calculator-target-int");
	const targetWisBox = document.getElementById("stats-calculator-target-wis");
	const targetConBox = document.getElementById("stats-calculator-target-con");
	const targetDexBox = document.getElementById("stats-calculator-target-dex");

	// Stat Arrays
	const STR = 0;
	const INT = 1;
	const WIS = 2;
	const CON = 3;
	const DEX = 4;

	const maxMonk = [180, 150, 100, 215, 100];
	const maxPriest = [100, 180, 215, 150, 100];
	const maxRogue = [180, 100, 100, 150, 215];
	const maxWarrior = [215, 100, 100, 180, 150];
	const maxWizard = [100, 215, 180, 150, 100];

	// XP Cost Factors:
	const PRE_TRANSCENDED = 17;
	const POST_TRANSCENDED = 20;
	const POST_MAX = 500000;

	// Load to Monk by default
	var maxStats = maxMonk;

	classSelection.onchange = function() {

		var className = classSelection.value

		if (className == "monk") {
			maxStats = maxMonk;
		} else if (className == "priest") {
			maxStats = maxPriest;
		} else if (className == "rogue") {
			maxStats = maxRogue;
		} else if (className == "warrior") {
			maxStats = maxWarrior;
		} else if (className == "wizard") {
			maxStats = maxWizard;
		}

		targetStrBox.value = maxStats[STR];
		targetIntBox.value = maxStats[INT];
		targetWisBox.value = maxStats[WIS];
		targetConBox.value = maxStats[CON];
		targetDexBox.value = maxStats[DEX];
	}

	calculateButton.onclick = function() {

		var hp = parseInt(HPBox.value);
		var transcended = transcendedCheckbox.checked;

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

			// Pre-Max Part:
			if (current[i] < maxStats[i])
			{
				// Sum of Consequtive Numbers Formula
				n = Math.min(target[i], maxStats[i]) - current[i];
				xp = n * (current[i] + (Math.min(target[i], maxStats[i]) - 1)) / 2; // Summation Part

				if (transcended) {
					xp = xp * hp * POST_TRANSCENDED; // Multiplicative Factor
				}
				else {
					xp = xp * hp * PRE_TRANSCENDED; // Multiplicative Factor
				}
			
				total += xp;
			}

			// Post-Max Part:
			// Sum of Consequtive Numbers Formula
			n = target[i] - Math.max(current[i], maxStats[i]);
                        xp = n * (Math.max(current[i], maxStats[i]) + (target[i] - 1)) / 2; // Summation Part

			xp = xp * POST_MAX;
			total += xp;

		}

		XPBox.value = total.toLocaleString("en-US");

	}

}

if (document.getElementById("stats-calculator") != null) {
	statsCalculator()
}

