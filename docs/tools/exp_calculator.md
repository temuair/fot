# EXP Calculator

<form id="exp-calculator">
  <table class="CalculatorTable">
   <tr>
    <td>
      <label>Class:</label>
      <select name="class" id="exp-calculator-class">
        <option value="monk">Monk</option>
        <option value="priest">Priest</option>
        <option value="rogue">Rogue</option>
        <option value="warrior">Warrior</option>
        <option value="wizard">Wizard</option>
      </select>
      <select name="stat" id="exp-calculator-stat-type">
        <option value="str">Strength</option>
        <option value="int">Intelligence</option>
        <option value="wis">Wisdom</option>
        <option value="con">Constitution</option>
        <option value="dex">Dexterity</option>
      </select>
    </td>
  </tr>
  <tr>
    <td>
      <label for="exp-calculator-transcended">Transcended:</label>
      <input type="checkbox" id="exp-calculator-transcended" name="transcended" value="Transcended">
    </td>
  </tr>
  <tr>
    <td><br><br></td>
  </tr>
  <tr>
    <td>Base HP: </td>
    <td>
      <input type="text" size="6" value="4000" class="CalculatorInputBox md-typeset" id="exp-calculator-hp">
    </td>
  </tr>
  <tr>
    <td>Base Stat: </td>
    <td>
      <input type="text" size="6" value="3" class="CalculatorInputBox md-typeset" id="exp-calculator-stat-base">
    </td>
  </tr>
  <tr>
    <td><br></td>
  </tr>
  <tr>
    <td>XP Boxed:</td>
    <td>
      <input type="text" size="14" value="0" class="CalculatorInputBox md-typeset" id="exp-calculator-experience">
    </td>
  </tr>
  <br>
  <tr>
    <td>Final Stat:</td>
    <td>
      <input type="text" size="3" value="3" class="CalculatorInfoBox md-typeset" id="exp-calculator-stat-final" readonly>
    </td>
  </tr>
  </table>
</form>

<br>
[Calculate](#){ .md-button .md-button--primary id="exp-calculator-button"}

## Usage

Select whether or not you're [transcended](../../classes/transcending), enter your base health, and enter your current base stat. The final stat is then displayed that you can gain from entering the EXP you have boxed.

## Notes

- The minimum HP for buying stats with experience is 4000.
- Please see [Ascending](../../classes/ascending) for more information.