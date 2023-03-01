// Set game's start/default values
let userHealthLevel = 16;
let computerHealthLevel = 16;
let roundsRemaining = 5;

document.querySelector('.playAgain').style.display = 'none';

const userHealthLevelCount = document.querySelector('.userHealthLevelCount');
userHealthLevelCount.textContent = userHealthLevel;
// console.dir(userHealthLevelCount);

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

// Use loop to set .addEventListener on each .selectSpell button
spellButtons.forEach((button) => {
  button.addEventListener('click', playRound);
});

// Create playRound function to be called each time user clicks a .selectSpell button except if roundsRemaining === 0.
function playRound(event) {
  const userSpell = event.target.textContent;

  const arrayOfComputerSpells = ['Water', 'Fire', 'Earth', 'Wind'];
  const randomNumber = Math.floor(Math.random() * 4);
  const computerSpell = arrayOfComputerSpells[randomNumber];

  function displayCastResult() {
    castResult.innerHTML = `You cast an Elemental ${userSpell.toUpperCase()} spell! Osmanwic casts an Elemental ${computerSpell.toUpperCase()} spell!`;
  }
  displayCastResult();

  if (userSpell === computerSpell) {
    damageResult.textContent =
      "Your spell and Osmanwic's are of the same Elemental class. They cancel each other out and neither of you are affected by them.";
    roundsRemaining--;
  } else if (
    (userSpell === 'Water' && computerSpell === 'Earth') ||
    (userSpell === 'Fire' && computerSpell === 'Wind') ||
    (userSpell === 'Earth' && computerSpell === 'Water') ||
    (userSpell === 'Wind' && computerSpell === 'Fire')
  ) {
    damageResult.textContent =
      "Your Health Level and Osmanwic's both decrease by 2.";
    userHealthLevel = userHealthLevel - 2;
    computerHealthLevel = computerHealthLevel - 2;
    roundsRemaining--;
  } else if (
    (userSpell === 'Fire' && computerSpell === 'Water') ||
    (userSpell === 'Earth' && computerSpell === 'Fire') ||
    (userSpell === 'Wind' && computerSpell === 'Earth') ||
    (userSpell === 'Water' && computerSpell === 'Wind')
  ) {
    damageResult.textContent =
      "Oof! Your Health Level decreases by 3 but Osmanwic's by only 1!";
    userHealthLevel = userHealthLevel - 3;
    computerHealthLevel = computerHealthLevel - 1;
    roundsRemaining--;
  } else if (
    (userSpell === 'Water' && computerSpell === 'Fire') ||
    (userSpell === 'Fire' && computerSpell === 'Earth') ||
    (userSpell === 'Earth' && computerSpell === 'Wind') ||
    (userSpell === 'Wind' && computerSpell === 'Water')
  ) {
    damageResult.textContent =
      'Excellent! Though your Health Level decreases by 1, Osmanwic decreases by 3!';
    userHealthLevel = userHealthLevel - 1;
    computerHealthLevel = computerHealthLevel - 3;
    roundsRemaining--;
  }

  userHealthLevelCount.textContent = userHealthLevel;
  computerHealthLevelCount.textContent = computerHealthLevel;
  roundsRemainingCount.textContent = roundsRemaining;

  // console.log(userHealthLevel);
  // console.log(computerHealthLevel);
  // console.log(roundsRemaining);

  if (roundsRemaining === 0) {
    castResult.textContent = '';
    damageResult.textContent = '';

    if (userHealthLevel > computerHealthLevel) {
      gameResult.textContent = 'You win the duel!';
    } else if (userHealthLevel < computerHealthLevel) {
      gameResult.textContent = 'The duel ends, and Osmanwic has won, alas!';
    } else if (userHealthLevel === computerHealthLevel) {
      gameResult.textContent =
        "The duel ends. It's hard to tell if you or Osmanwic remains stronger. The duel is a draw.";
    }

    document.querySelector('.playAgain').style.display = '';
  }
  // **********************>>>>>>> ADD EVENT LISTENER TO .playAgainButton

  // function getUserSpell() {
  //   const arrayOfUserSpells = ['water', 'fire', 'earth', 'wind'];
  //   const computerSpell = arrayOfComputerSpells[randomNumber];
  // }

  // blogPosts.forEach((blogPost) => {
  //   // console.log(blogPost);
  //   blogPost.addEventListener('mouseenter', function (event) {
  //     // event.currentTarget.classList.toggle('purple');
  //     event.target.classList.toggle('purple');
  //     event.target.classList.toggle('red');
  //     // }
  //   });
  //   blogPost.addEventListener('mouseleave', function (event) {
  //     // if (!event.currentTarget.classList.toggle('purple')) {
  //     event.target.classList.toggle('red');
  //     event.target.classList.toggle('purple');
  //     // }
  //   });
}
