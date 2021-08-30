# Max Stats XP Calculator

<form id="max-stats-calculator">

  <label>Class:</label>
  <select name="class" id="calculator-target">
    <option value="select">-- Select Class --</option>
    <option value="monk">Monk</option>
    <option value="priest">Priest</option>
    <option value="rogue">Rogue</option>
    <option value="warrior">Warrior</option>
    <option value="wizard">Wizard</option>
  </select>

  <br><br>

  Base HP: <input type="text" size="6" value="4000" class="CalculatorInputBox md-typeset" id="calculator-hp">

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
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="calculator-current-str"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="calculator-current-int"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="calculator-current-wis"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="calculator-current-con"></td>
  <td><input type="text" size="3" class="CalculatorInputBox md-typeset" id="calculator-current-dex"></td>
  </tr>

  <tr>
  <td style="text-align:right">Target:</td>
  <td><input type="text" size="3" readonly class="CalculatorInfoBox md-typeset" id="calculator-target-str"></td>
  <td><input type="text" size="3" readonly class="CalculatorInfoBox md-typeset" id="calculator-target-int"></td>
  <td><input type="text" size="3" readonly class="CalculatorInfoBox md-typeset" id="calculator-target-wis"></td>
  <td><input type="text" size="3" readonly class="CalculatorInfoBox md-typeset" id="calculator-target-con"></td>
  <td><input type="text" size="3" readonly class="CalculatorInfoBox md-typeset" id="calculator-target-dex"></td>
  </tr>
  </table>

  <br>

  XP Needed: <input type="text" size="14" readonly class="CalculatorInfoBox md-typeset" id="calculator-experience">

</form>

<br>
[Calculate](#){ .md-button .md-button--primary id="calculator-button"}

## Usage

Select your class, enter your base health, and enter your current (base) stats. You don't need to enter values for particular stats that you don't want to calculate (for example, if they're already maxed and you don't want to type it).

## Notes

- The minimum HP for buying stats with experience is 4000.
- Please see [Ascending](../../classes/ascending) for more information.

