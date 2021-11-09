function statsCalculator() {
  /**
   * Offset backwards by 1 on each value, should be ready like this:
   * Sum(1) = [0,1) = 0
   * Sum(10) = [0,10) = 0+1+2+3+4+5+6+7+8+9
   * Sum(4,6) = [4,6) = 4+5
   * @param {Number} n 
   * @param {Number} m 
   * @returns 
   */
  function Sum(n, m) {
    if (!m) {
      m = n;
      n = 0;
    }
    return 0.5 * (m - n) * (m + n - 1);
  }

  function PreStatCost(HP, MULT, CURRENT, TARGET) {
    const XP_MULTIPLIER = HP * MULT;
    return XP_MULTIPLIER * Sum(CURRENT, TARGET);
  }

  function PostStatCost(CURRENT, TARGET) {
    return POST_MAX * Sum(CURRENT, TARGET);
  }

  function StatCost(HP, MULT, MAX, current, target) {
    let total = 0;
    if (current <= MAX) {
      total += PreStatCost(HP, MULT, current, Math.min(target, MAX));
    }
    if (target > MAX) {
      total += PostStatCost(Math.max(MAX, current), target);
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
  const classSelection = document.getElementById("stats-calculator-class");
  const transcendedCheckbox = document.getElementById("stats-calculator-transcended");
  const HPBox = document.getElementById("stats-calculator-hp");
  const XPBox = document.getElementById("stats-calculator-experience");
  const calculateButton = document.getElementById("stats-calculator-button");

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
  let MAX_STATS = MAX.monk;

  classSelection.onchange = function () {
    MAX_STATS = MAX[classSelection.value];
    TARGET.forEach((element, i) => element.value = MAX_STATS[i]);
  }

  calculateButton.onclick = function () {
    const HP = parseInt(HPBox.value);
    if (isNaN(HP) || HP <= 0) return;
    const CURRENT_STATS = CURRENT.map(element => parseInt(element.value));
    const TARGET_STATS = TARGET.map(element => parseInt(element.value));
    const MULTIPLIER = transcendedCheckbox.checked ? POST_TRANSCENDED : PRE_TRANSCENDED;
    XPBox.value = CURRENT_STATS.reduce((total, CURRENT, i) => {
      const TARGET = TARGET_STATS[i];
      const MAX = MAX_STATS[i];
      if (isNaN(CURRENT) || isNaN(TARGET)) return total;
      if (CURRENT >= TARGET || CURRENT <= 0) return total;
      return total + StatCost(HP, MULTIPLIER, MAX, CURRENT, TARGET);
    }, 0).toLocaleString("en-US");
  }
}

if (document.getElementById("stats-calculator")) {
  statsCalculator()
}