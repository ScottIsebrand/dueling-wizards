<a name="readme-top"></a>

# Dueling Wizards

This is a variation of a basic computer game version of the hand game Rock, Paper, Scissors (also known as Rochambeau or as Stone, Paper, Scissors).

## Motivation

Using HTML, CSS, and JavaScript, to create a simple game in the DOM that is two player (player/user versus the computer), has a win state and lose state, and includes multiple rounds.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Wireframe

![dueling-wizards-wireframe](https://user-images.githubusercontent.com/115107346/221728000-8c826d97-7af5-44ab-a1d7-6f439caf2543.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Damage Table

![dueling-wizards-damage-table](https://user-images.githubusercontent.com/115107346/222015178-ae5a0ff5-26e4-425b-8774-5df4d043b8e3.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Build With

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tools Used

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) | ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Appraoch Used

First in the global scope, the game's default values are assigned to variables--ie, for the player's and computer's Health Levels (16 each) and the number of rounds remaining (5)--, variables are declared for HTML elements that will be manipulated, event listenrs are added to the Spell Buttons, and the Play Again button is hidden with `document.querySelector('.playAgainButton').style.display = 'none';`.

Game play is all within a single function. The Play Again button's event listener is added within that function. Also within the function is the condition statement to end the game,: ` if (roundsRemaining === 0)` and relevant end-of-game code, eg, making making the Play Again button appear.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Live Site

## Installation Instructions

## Enhancements Roadmap

- [ ] When the game ends (`roundsRemaining === 0`), set (reduce) opacity property of .spellButtons to ~0.6 to show the buttons are disabled.
- [ ] Add an alternative game-ends condition of when player or Computer's Health Level reaches `<= 0`, and increase default Health Levels and default roundsRemaining, so that player Computer death is possible, with the appropriate alternative gameResult text printed to the DOM.
- [ ] Enhance the styling. Eg,
  - adding emoji or animated GIFs for the Elemental categories;
  - adding publicly available sound effects (if available) for each spellButton 'click' and computerSpell selection (eg, a _whoosh_ sound for Wind, an ocean wave sound for Water, etc.)
  - replace Damage Table image file with a dynamic table, eg, the table cells corresponding to the round's `userSpell` and, after a slight delay, `computerSpell` change background color, as does, after a second slight delay, the appropriate cell that states the damage.
- [ ] Add a Spell Conduit choice; user selects Scroll, Wand, Staff, or Amulet, which is compared against the computer's randomly selected Conduit and Health Points deducted in accordance with a Conduit Power Table. Default Health Levels should be raised since the potential total damage per round will be a larger number by introducing the Spell Conduit choice. Player and computer Conduit choices and damage would need to be appear in the DOM.
- [ ] Add a way for the player to choose when to drink a potion that increase Health Level. (Possibly randomize the Health Level increase as 1, 2, or 3 Health Level points.) Randomize computer decision as to whether or not, in each round, the computer drinks the potion.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributions

Suggestions for enchancements are welcome! Simply open an issue with the tag "enhancement" or fork the repo and create a pull request. Please give the project a star...I would be very grateful! Thank you!

## Contact

Scott Isebrand - [@isebrand](https://www.instagram.com/isebrand/)

Project Link: [https://github.com/ScottIsebrand/dueling-wizards](https://github.com/ScottIsebrand/dueling-wizards)

## Acknowledgements/Credits

**Fonts**: [Balthazar](https://fonts.google.com/specimen/Balthazar). Google Fonts. Accessed February 28, 2023.

![Flickr](https://img.shields.io/static/v1?style=for-the-badge&message=Flickr&color=0063DC&logo=Flickr&logoColor=FFFFFF&label=)

**Background Image**: Renee Robinson. [Paper Texture](https://www.flickr.com/photos/playingwithpsp/2558160805). Flickr. ([Creative Commons (4.0) license](https://creativecommons.org/licenses/by/4.0/).) GeeksForGeeks.org. Accessed February 28, 2023.

### Code

![GeeksForGeeks](https://img.shields.io/badge/GeeksforGeeks-gray?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c)

**Basic HTML layout**: Pritish Nagpal. "[Rock, Paper and Scissor Game using Javascript](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)." GeeksForGeeks.org. Accessed February 26, 2023.

**To hide buttons**: Rahul Uniyal. "[Hide elements in HTML using display property](https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/)." GeeksForGeeks.org. Accessed February 28, 2023.

![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

**To reload a page**: gianebao. [Answer to "How to reload a page using JavaScript"](https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript?noredirect=1&lq=1). Stack Overflow. Accessed March 2, 2023.

### Additional

**README.md badges**:

- Ileriayo Adebiyi. "[Markdown Badges](https://github.com/Ileriayo/markdown-badges)." GitHub.com. Accessed March 2, 2023.
- Shunsuke Mano. [Shields with icons](https://github.com/progfay/shields-with-icon/blob/master/Snippets.md). GitHub.com. Accessed March 2, 2023.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
