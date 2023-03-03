// Set game's start/default values
let userHealthLevel = 16;
let computerHealthLevel = 16;
let roundsRemaining = 5;

const userHealthLevelCount = document.querySelector('.userHealthLevelCount');
userHealthLevelCount.textContent = userHealthLevel;

const computerHealthLevelCount = document.querySelector(
  '.computerHealthLevelCount'
);
computerHealthLevelCount.textContent = computerHealthLevel;

const roundsRemainingCount = document.querySelector('.roundsRemainingCount');
roundsRemainingCount.textContent = roundsRemaining;

// Get all buttons with class of .selectSpell
const spellButtons = document.querySelectorAll('.selectSpell');
const castResult = document.querySelector('.castResult');
const damageResult = document.querySelector('.damageResult');
const gameResult = document.querySelector('.gameResult');
const playAgainButton = document.querySelector('.playAgain');

document.querySelector('.playAgainButton').style.display = 'none';

// Declare audio file
let waterAudio = new Audio(
  './393584__klankbeeld__wave-close-coast-small-001.wav'
);
let fireAudio = new Audio('./472687__silverillusionist__torch-swing.wav');
let earthAudio = new Audio('./522099__magnuswaker__concrete-smash-2.wav');
let airAudio = new Audio('./611__plagasul__maxxbasswind.wav');

// Use loop to set .addEventListener on each .selectSpell button
spellButtons.forEach((button) => {
  button.addEventListener('click', playRound);
});

// Function for a round of the game; it is called each time user clicks a .selectSpell button, except if roundsRemaining === 0.
function playRound(event) {
  const userSpell = event.target.textContent;
  const userSpellColor = event.target.style.color;

  const arrayOfComputerSpells = ['Water', 'Fire', 'Earth', 'Air'];
  const randomNumber = Math.floor(Math.random() * 4);
  const computerSpell = arrayOfComputerSpells[randomNumber];

  // Function that prints to the DOM the result of player choice and
  function displayCastResult() {
    castResult.innerHTML = `You cast an Elemental ${userSpell.toUpperCase()} spell! Osmanwic casts an Elemental ${computerSpell.toUpperCase()} spell!`;
  }
  displayCastResult();
  console.dir(castResult);

  if (userSpell === 'Water') {
    waterAudio.play();
  } else if (userSpell === 'Fire') {
    fireAudio.play();
  } else if (userSpell === 'Earth') {
    earthAudio.play();
  } else if (userSpell === 'Air') {
    airAudio.play();
  }
  // Conditional statements to decide winner of a round
  if (userSpell === computerSpell) {
    damageResult.textContent =
      "Your and Osmanwic's spells are of the same Element. They cancel each other out; neither of you are affected by them.";
    roundsRemaining--;
  } else if (
    (userSpell === 'Water' && computerSpell === 'Earth') ||
    (userSpell === 'Fire' && computerSpell === 'Air') ||
    (userSpell === 'Earth' && computerSpell === 'Water') ||
    (userSpell === 'Air' && computerSpell === 'Fire')
  ) {
    damageResult.textContent =
      "Your Health Level and Osmanwic's both decrease by 2.";
    userHealthLevel = userHealthLevel - 2;
    computerHealthLevel = computerHealthLevel - 2;
    roundsRemaining--;
  } else if (
    (userSpell === 'Fire' && computerSpell === 'Water') ||
    (userSpell === 'Earth' && computerSpell === 'Fire') ||
    (userSpell === 'Air' && computerSpell === 'Earth') ||
    (userSpell === 'Water' && computerSpell === 'Air')
  ) {
    damageResult.textContent =
      "Oof! Your Health Level decreases by 3 but Osmanwic's by only 1!";
    userHealthLevel = userHealthLevel - 3;
    computerHealthLevel = computerHealthLevel - 1;
    roundsRemaining--;
  } else if (
    (userSpell === 'Water' && computerSpell === 'Fire') ||
    (userSpell === 'Fire' && computerSpell === 'Earth') ||
    (userSpell === 'Earth' && computerSpell === 'Air') ||
    (userSpell === 'Air' && computerSpell === 'Water')
  ) {
    damageResult.textContent =
      'Excellent! Though your Health Level decreases by 1, Osmanwic decreases by 3!';
    userHealthLevel = userHealthLevel - 1;
    computerHealthLevel = computerHealthLevel - 3;
    roundsRemaining--;
  }

  if (userHealthLevel > computerHealthLevel) {
    userHealthLevelCount.style.color = 'green';
    computerHealthLevelCount.style.color = 'red';
  } else if (userHealthLevel < computerHealthLevel) {
    userHealthLevelCount.style.color = 'red';
    computerHealthLevelCount.style.color = 'green';
  } else if (userHealthLevel === computerHealthLevel) {
    userHealthLevelCount.style.color = 'orange';
    computerHealthLevelCount.style.color = 'orange';
  }

  userHealthLevelCount.textContent = userHealthLevel;
  computerHealthLevelCount.textContent = computerHealthLevel;
  roundsRemainingCount.textContent = roundsRemaining;

  // console.log(userHealthLevel);
  // console.log(computerHealthLevel);
  // console.log(roundsRemaining);

  if (roundsRemaining === 0) {
    // castResult.textContent = '';
    // damageResult.textContent = '';

    if (userHealthLevel > computerHealthLevel) {
      gameResult.textContent =
        'You emerge from the duel stronger than Osmanwic! You win the duel!';
    } else if (userHealthLevel < computerHealthLevel) {
      gameResult.textContent =
        'The duel ends with you more weakened than Osmanwic! Alas, Osmanwic has won the duel.';
    } else if (userHealthLevel === computerHealthLevel) {
      gameResult.textContent =
        "The duel ends. You and Osmanwic can't decide who remains stronger. You both agree to call the duel a draw.";
    }
    const playAgainButton = document.querySelector('.playAgainButton');
    playAgainButton.addEventListener('click', function (event) {
      window.location.reload();
    });

    document.querySelector('.callToAction').style.display = 'none';

    document.querySelector('.playAgainButton').style.display = '';
    spellButtons.forEach((button) => {
      button.style.display = 'none';
      // button.disabled = true;
    });
  }
}
