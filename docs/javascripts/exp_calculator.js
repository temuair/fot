function postStatsGained(exp, stat) {
  const POST_MAX = 500000;
  const C = POST_MAX * 0.5;
  return Math.floor(positiveQuadraticRoot(1, -1, -(exp / C + stat ** 2 - stat)));
}

function preStatsGained(hp, multiplier, exp, stat) {
  const C = hp * multiplier * 0.5;
  return Math.floor(positiveQuadraticRoot(1, -1, -(exp / C + stat ** 2 - stat)));
}

function positiveQuadraticRoot(a, b, c) {
  return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
}

/**
 * Calculate the stats gained based off of HP and transcendent status
 * @param {Number} hp
 * @param {Number} multiplier
 * @param {Number} exp
 * @param {Number} stat
 * @param {Number} max
 * @returns {Number}
 */
function statsGained(hp, multiplier, exp, stat, max) {
  let final = stat;
  if (stat < max) {
    final = preStatsGained(hp, multiplier, exp, stat, max);
    if (final > max) {
      //postStatsGained is available globally
      final = postStatsGained(exp - preStatCost(hp, multiplier, stat, max), max);
    }
  } else {
    final = postStatsGained(exp, stat);
  }
  return final;
}

function expCalculator() {
  // XP Cost Factors:
  const PRE_TRANSCENDED = 17;
  const POST_TRANSCENDED = 20;
  const MAX = {
    monk: [180, 150, 100, 215, 100],
    priest: [100, 180, 215, 150, 100],
    rogue: [180, 100, 100, 150, 215],
    warrior: [215, 100, 100, 180, 150],
    wizard: [100, 215, 180, 150, 100]
  };
  const CLASS_SELECTION = document.getElementById("exp-calculator-class");
  const TRANSCENDED_CHECKBOX = document.getElementById("exp-calculator-transcended");
  const HP_BOX = document.getElementById("exp-calculator-hp");
  const XP_BOX = document.getElementById("exp-calculator-experience");
  const BASE_STAT_BOX = document.getElementById("exp-calculator-stat-base");
  const BASE_STAT_TYPE = document.getElementById("exp-calculator-stat-type");
  const FINAL_STAT_BOX = document.getElementById("exp-calculator-stat-final");
  const CALCULATE_BUTTON = document.getElementById("exp-calculator-button");

  // Load to Monk by default
  let maxStats = MAX.monk;

  CLASS_SELECTION.onchange = function () {
    maxStats = MAX[CLASS_SELECTION.value];
  }

  CALCULATE_BUTTON.onclick = function () {
    const [HP, XP] = [HP_BOX, XP_BOX].map(element => parseInt(element.value.replace(/,/g, '')));
    if ([HP, XP].some(val => isNaN(val) || val <= 0)) return;
    const MULTIPLIER = TRANSCENDED_CHECKBOX.checked ? POST_TRANSCENDED : PRE_TRANSCENDED;
    const BASE_STAT = parseInt(BASE_STAT_BOX.value);
    const MAX_STAT = maxStats[BASE_STAT_TYPE.selectedIndex];
    FINAL_STAT_BOX.value = statsGained(HP, MULTIPLIER, XP, BASE_STAT, MAX_STAT).toLocaleString("en-US");
  }
}

if (document.getElementById("exp-calculator")) {
  expCalculator()
}