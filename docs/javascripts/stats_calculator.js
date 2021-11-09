function statsCalculator() {
  /**
   * Calculate sum or difference of sums.
   * @param {Number} n 
   * @param {Number} m 
   * @returns {Number}
   */
  function calculateSum(n, m) {
    if (!m) {
      m = n;
      n = 0;
    }
    return 0.5 * (m - n) * (m + n + 1);
  }

  /**
   * Before transcendent
   * @param {Number} hp 
   * @param {Number} multiplier 
   * @param {Number} current 
   * @param {Number} target 
   * @returns {Number}
   */
  function preStatCost(hp, multiplier, current, target) {
    const x = hp * multiplier;
    return x * calculateSum(current - 1, target - 1);
  }

  /**
   * After transcendent
   * @param {Number} current 
   * @param {Number} target 
   * @returns {Number}
   */
  function postStatCost(current, target) {
    return POST_MAX * calculateSum(current - 1, target - 1);
  }

  /**
   * Calculate the cost of a stat based off of HP and transcendent status
   * @param {Number} hp 
   * @param {Number} mult 
   * @param {Number} max 
   * @param {Number} current 
   * @param {Number} target 
   * @returns {Number}
   */
  function statCost(hp, mult, max, current, target) {
    let total = 0;
    if (current <= max) {
      total += preStatCost(hp, mult, current, Math.min(target, max));
    }
    if (target > max) {
      total += postStatCost(Math.max(max, current), target);
    }
    return total;
  }
  // XP Cost Factors:
  const PRE_TRANSCENDED = 17;
  const POST_TRANSCENDED = 20;
  const POST_MAX = 500000;
  const MAX = {
    monk: [180, 150, 100, 215, 100],
    priest: [100, 180, 215, 150, 100],
    rogue: [180, 100, 100, 150, 215],
    warrior: [215, 100, 100, 180, 150],
    wizard: [100, 215, 180, 150, 100]
  };
  const CLASS_SELECTION = document.getElementById("stats-calculator-class");
  const TRANSCENDED_CHECKBOX = document.getElementById("stats-calculator-transcended");
  const HP_BOX = document.getElementById("stats-calculator-hp");
  const XP_BOX = document.getElementById("stats-calculator-experience");
  const CALCULATE_BUTTON = document.getElementById("stats-calculator-button");

  const CURRENT = [
    "stats-calculator-current-str",
    "stats-calculator-current-int",
    "stats-calculator-current-wis",
    "stats-calculator-current-con",
    "stats-calculator-current-dex"
  ].map(id => document.getElementById(id));
  const TARGET = [
    "stats-calculator-target-str",
    "stats-calculator-target-int",
    "stats-calculator-target-wis",
    "stats-calculator-target-con",
    "stats-calculator-target-dex"
  ].map(id => document.getElementById(id));

  // Load to Monk by default
  let maxStats = MAX.monk;

  CLASS_SELECTION.onchange = function () {
    maxStats = MAX[CLASS_SELECTION.value];
    TARGET.forEach((element, i) => element.value = maxStats[i]);
  }

  CALCULATE_BUTTON.onclick = function () {
    const HP = parseInt(HP_BOX.value);
    if (isNaN(HP) || HP <= 0) return;
    const CURRENT_STATS = CURRENT.map(element => parseInt(element.value));
    const TARGET_STATS = TARGET.map(element => parseInt(element.value));
    const MULTIPLIER = TRANSCENDED_CHECKBOX.checked ? POST_TRANSCENDED : PRE_TRANSCENDED;
    XP_BOX.value = CURRENT_STATS.reduce((total, value, i) => {
      const TARGET = TARGET_STATS[i];
      const MAX = maxStats[i];
      if (isNaN(value) || isNaN(TARGET)) return total;
      if (value >= TARGET || value <= 0) return total;
      return total + statCost(HP, MULTIPLIER, MAX, value, TARGET);
    }, 0).toLocaleString("en-US");
  }
}

if (document.getElementById("stats-calculator")) {
  statsCalculator()
}