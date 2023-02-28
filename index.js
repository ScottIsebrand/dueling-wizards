// Set game's start/default values
let userHealthLevel = 16;
let computerHealthLevel = 16;
let roundsRemaining = 5;

let userHealthLevelCount = document.querySelector('.userHealthLevelCount');
userHealthLevelCount.textContent = `${userHealthLevel}`;

let computerHealthLevelCount = document.querySelector(
  '.computerHealthLevelCount'
);
computerHealthLevelCount.textContent = `${computerHealthLevel}`;

let roundsRemainingCount = document.querySelector('.roundsRemainingCount');
roundsRemainingCount.textContent = `${roundsRemaining}`;

// Get all buttons with class of .selectSpell
const buttons = document.querySelectorAll('.selectSpell');
// Use loop to set .addEventListener on each .selectSpell button
buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});

// Create playRound function to be called each time user clicks a .selectSpell button except if roundsRemaining === 0.
function playRound(event) {
  // console.dir(event.target);
  const userSpell = event.target.textContent;

  const arrayOfComputerSpells = ['Water', 'Fire', 'Earth', 'Wind'];
  const randomNumber = Math.floor(Math.random() * 4);
  const computerSpell = arrayOfComputerSpells[randomNumber];

  function displayCastResult() {
    const castResult = document.querySelector('.castResult');
    castResult.innerHTML = `You cast an Elemental ${userSpell.toUpperCase()} spell! Osmanwic casts an Elemental ${computerSpell.toUpperCase()} spell!`;
  }
  displayCastResult();

  const damageResult = document.querySelector('.damageResult');
  if (userSpell === computerSpell) {
    damageResult.innerText =
      "Your spell and Osmanwic's are of the same Elemental class. They cancel each other out and neither of you are affected by them.";
  } else if (
    (userSpell === 'Water' && computerSpell === 'Earth') ||
    (userSpell === 'Fire' && computerSpell === 'Wind') ||
    (userSpell === 'Earth' && computerSpell === 'Water') ||
    (userSpell === 'Wind' && computerSpell === 'Fire')
  ) {
    damageResult.innerText = "Your Health Level and Osmanwic's decrease by 2.";
    userHealthLevel = userHealthLevel - 2;
    computerHealthLevel = computerHealthLevel - 2;
    roundsRemaining--;
  }
  console.log(computerHealthLevel);
  console.log(userHealthLevel);
  console.log(roundsRemaining);

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
