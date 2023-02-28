Player vs. Computer ('Osmanwic'); 16 hit points each, 5 rounds of play.

UI<div id intro>: <h1>: "Dueling Wizards"
UI<div id intro>: <p>: [explanation]
UI<div>: <img>: damage table as image

UI<div>: "Your Health Level" and "Osmanwic Health Level"
UI<div>: "Rounds Remaining"
UI<div>: "Choose your Elemental Spell to cast!"
UI<div>: Four buttons for the player to click, each corresponding to an Elemental Spell
UI<div id result>: Selected spells statement
UI<also div id result???>: Game final-result statement

let userHealthLevel = 16;
let computerHealthLevel = 16;
let roundsRemaining = 5;

const arrayOfElementalSpells = ['Water', 'Fire', 'Earth', 'Wind']

Should this be one big function with nested functions???????

eventListener on each of four buttons
When Player clicks button of desired Elemental Spell:

1. Player selection (userSpell) recorded as appropriate index position of arrayOfElementalSpells
2. Computer Elemental Spell selected (computerSpell) with Math.random() as random index position of arrayOfElementalSpells
3. Each selection printed to DOM -- eg, `${userSpell} cast by you, ${computerSpell} cast by Osmanwic!`
4. userHealthLevel and computerHealthLevel each reduced per logic of damage table.
5. roundsRemaining reduced by 1

UI<div></div>: action line
When roundsRemaining reaches 0, userHitPoints and computerHitPoints are compared:

- if userHitPoints > computerHitPoints, printed to DOM `Osmanwic concedes! You have won the duel!`
- if userHitPoints < computerHitPoints, printed to DOM `You concede. Osmanwic has won the duel!`
- if userHitPoints === computerHitPoints, printed to DOM `Neither you nor Osmanwic can dominate the other. You both disengage to duel again another day!`

function getComputerSpell () {
const arrayOfComputerSpells = ['earth', 'water', 'fire', 'wind'];
const randomNumber = Math.floor(Math.random() \* 4);
const computerSpell = arrayOfComputerSpells[randomNumber];
}

## Future Improvements

Add emoji
Water &#127754;
Fire &#128293;
Earth &#127956;
Wind &#127788;
