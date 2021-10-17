# Stats Calculator

<form id="stats-calculator">

  <label>Class:</label>
  <select name="class" id="stats-calculator-class">
    <option value="monk">Monk</option>
    <option value="priest">Priest</option>
    <option value="rogue">Rogue</option>
    <option value="warrior">Warrior</option>
    <option value="wizard">Wizard</option>
  </select>

  <br>
  <label for="stats-calculator-transcended">Transcended:</label>
  <input type="checkbox" id="stats-calculator-transcended" name="transcended" value="Transcended">

  <br><br>

  Base HP: <input type="text" size="6" value="4000" class="CalculatorInputBox md-typeset" id="stats-calculator-hp">

  <br><br>

  <table class="CalculatorTable">

  <tr>
  <td></td>
  <td><center>STR</center></td>
  <td><center>INT</center></td>
  <td><center>WIS</center></td>
  <td><center>CON</center></td>
  <td><center>DEX</center></td>
  </tr>

  <tr>
  <td style="text-align:right">Current:</td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-current-str" value="3"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-current-int" value="3"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-current-wis" value="3"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-current-con" value="3"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-current-dex" value="3"></td>
  </tr>

  <tr>
  <td style="text-align:right">Target:</td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-target-str" value="180"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-target-int" value="150"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-target-wis" value="100"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-target-con" value="215"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="stats-calculator-target-dex" value="100"></td>
  </tr>
  </table>

  <br>

  XP Needed: <input type="text" size="14" readonly class="CalculatorInfoBox md-typeset" id="stats-calculator-experience">

</form>

<br>
[Calculate](#){ .md-button .md-button--primary id="stats-calculator-button"}

## Usage

Select your class, select whether or not you're [transcended](../../classes/transcending), enter your base health, and enter your current (base) and target stats. You don't need to enter values for particular stats that you don't want to calculate.

## Notes

- The minimum HP for buying stats with experience is 4000.
- Please see [Ascending](../../classes/ascending) for more information.

