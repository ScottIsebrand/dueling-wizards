# Dueling Wizards

This is a variation of a basic computer game version of the hand game Rock, Paper, Scissors (also known as Rochambeau or as Stone, Paper, Scissors).

## Motivation

Using HTML, CSS, and JavaScript that manipluates the DOM, to create a simple game that is two player (player/user versus the computer), has a win state and lose state, and includes multiple rounds.

## Wireframe

![dueling-wizards-wireframe](https://user-images.githubusercontent.com/115107346/221728000-8c826d97-7af5-44ab-a1d7-6f439caf2543.png)

### Damage Table

![dueling-wizards-damage-table](https://user-images.githubusercontent.com/115107346/222015178-ae5a0ff5-26e4-425b-8774-5df4d043b8e3.png)

## Features (Tech & Appraoch Used)

Used `document.querySelector('.playAgain').style.display = 'none';` to make Play Again button hidden as its default.

## Live Site

## Installation Instructions

## Possible Game Improvements

- [] When the game ends (`roundsRemaining === 0`), set (reduce) opacity property of .spellButtons to ~0.6 to show the buttons are disabled.
- [] Add an alternative game-ends condition of when player or Computer's Health Level reaches `<= 0`, and increase default Health Levels and default roundsRemaining, so that player Computer death is possible, with the appropriate alternative gameResult text printed to the DOM.
- [] Enhance the styling. Eg,
  - adding emoji or animated GIFs for the Elemental categories;
  - adding publicly available sound effects (if available) for each spellButton 'click' and computerSpell selection (eg, a _whoosh_ sound for Wind, an ocean wave sound for Water, etc.)
  - replace Damage Table image file with a dynamic table, eg, the table cells corresponding to the round's `userSpell` and, after a slight delay, `computerSpell` change background color, as does, after a second slight delay, the appropriate cell that states the damage.
- [] Add a Spell Conduit choice; user selects Scroll, Wand, Staff, or Amulet, which is compared against the computer's randomly selected Conduit and Health Points deducted in accordance with a Conduit Power Table. Default Health Levels should be raised since the potential total damage per round will be a larger number by introducing the Spell Conduit choice. Player and computer Conduit choices and damage would need to be appear in the DOM.
- [] Add a way for the player to choose when to drink a potion that increase Health Level. (Possibly randomize the Health Level increase as 1, 2, or 3 Health Level points.) Randomize computer decision as to whether or not, in each round, the computer drinks the potion.

## Resources / Credits

**Fonts**: [Balthazar](https://fonts.google.com/specimen/Balthazar). Google Fonts.

**Background Image**: Renee Robinson. [Paper Texture](https://www.flickr.com/photos/playingwithpsp/2558160805). Flickr. ([Creative Commons (4.0) license](https://creativecommons.org/licenses/by/4.0/).) GeeksForGeeks.org.

### Code

**Basic HTML layout**: Pritish Nagpal. "[Rock, Paper and Scissor Game using Javascript](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)." GeeksForGeeks.org. Accessed February 26, 2023.

**To hide buttons**: Rahul Uniyal. "[Hide elements in HTML using display property](https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/)." GeeksForGeeks.org. Accessed February 28, 2023.

**To reload a page**: gianebao. [Answer to "How to reload a page using JavaScript"](https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript?noredirect=1&lq=1). Stack Overflow. Accessed March 2, 2023.
