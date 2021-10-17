# MP Calculator

<form id="mp-calculator">

  <table class="CalculatorTable">
  <tr>
  <td>Current: </td>
  <td><input type="text" size="6" value="4000" class="CalculatorInputBox md-typeset" id="mp-calculator-current"></td>
  </tr>

  <tr>
  <td>Target: </td>
  <td><input type="text" size="6" value="8000" class="CalculatorInputBox md-typeset" id="mp-calculator-target"></td>
  </tr>

  </table>

  <br>

  XP Needed: <input type="text" size="14" readonly class="CalculatorInfoBox md-typeset" id="mp-calculator-experience">

</form>

<br>
[Calculate](#){ .md-button .md-button--primary id="mp-calculator-button"}

## Usage

Enter your current and target MP. The calculator will attempt to purchase as many 250 MP increments as possible, and then purchase 25 MP increments until it just exceeds your target MP.

## Notes

- Please see [Ascending](../../classes/ascending) for more information.

