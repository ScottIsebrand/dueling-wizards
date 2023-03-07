<a name="readme-top"></a>

# Dueling Wizards

This is a variation of a basic, computer-game version of the hand game Rock, Paper, Scissors (also known as Rochambeau or as Stone, Paper, Scissors). The wizard name Osmanwic referenced in the game's introduction paragraph is a partial anagram of Mac Win OS.

## Motivation

Using HTML, CSS, and JavaScript, to create a simple game in the DOM that is two player (the player versus the computer), has a win state and lose state, and includes multiple rounds.

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

## Approach Used

First in the global scope, the game's default values are assigned to variables--ie, for the Player's and Computer's Health Levels (16 each) and the number of rounds remaining (5)--, variables are declared for HTML elements that will be manipulated, event listenrs are added to the Spell Buttons, and the Play Again button is hidden with `document.querySelector('.playAgainButton').style.display = 'none';`.

Game play is all within a single function. The Play Again button's event listener is added within that function. Also within the function is the condition statement to end the game, ` if (roundsRemaining === 0)` and relevant end-of-game code, eg, making making the Play Again button appear.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Live Site

[Dueling Wizards](https://scottisebrand.github.io/dueling-wizards/)

## Enhancements Roadmap

- [ ] Add a button the player can click to disable spell sound effects.
- [ ] When the game ends, reduce opacity property of Spell Buttons to ~0.6 to show the buttons are disabled.
- [ ] Add an alternative game-ends condition of when Player or Computer's Health Level is `<= 0`, and increase default Health Levels and default Rounds Remaining, so that Computer or Player death is possible, with the appropriate alternative gameResult text printed to the DOM.
- [ ] Enhance the styling. Eg,
  - [ ] adding emoji or animated GIFs for the Elemental categories;
  - [ ] replace Damage Table image file with a dynamic table, eg, the table cells corresponding to the round's `userSpell` and, after a slight delay, `computerSpell` change background color, as does, after a second slight delay, the appropriate cell that states the damage.
- [ ] Add a Spell Conduit choice; user selects Scroll, Wand, Staff, or Amulet, which is compared against the Computer's randomly selected Conduit and Health Points deducted in accordance with a Conduit Power Table. Default Health Levels should be raised since the potential total damage per round will be a larger number by introducing the Spell Conduit choice. Player and Computer Conduit choices and damage would need to appear in the DOM.
- [ ] Add a way for the Player to choose when to drink a potion that increase Health Level. (Possibly randomize the Health Level increase as 1, 2, or 3 Health Level points.) Randomize Computer decision as to whether or not, in each round, the Computer drinks the potion.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contribute

Suggestions for enchancements are welcome! Simply open an issue with the tag "enhancement". Please give the project a star...I would be very grateful! Thank you!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Scott Isebrand - [@isebrand](https://www.instagram.com/isebrand/)

Project Link: [https://github.com/ScottIsebrand/dueling-wizards](https://github.com/ScottIsebrand/dueling-wizards)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgements/Credits

### Design

**Fonts**:

- [Balthazar](https://fonts.google.com/specimen/Balthazar). Google Fonts. Accessed February 28, 2023.

**Background Image**:

![Flickr](https://img.shields.io/static/v1?style=for-the-badge&message=Flickr&color=0063DC&logo=Flickr&logoColor=FFFFFF&label=)

- Renee Robinson. [Paper Texture](https://www.flickr.com/photos/playingwithpsp/2558160805). Flickr. ([Creative Commons 4.0](https://creativecommons.org/licenses/by/4.0/).) Accessed February 28, 2023

### Audio

**[Freesound.org](https://freesound.org/browse/) [[Creative Commons 4.0]](https://freesound.org/help/faq/#licenses)**

- [klankbeeld](http://freesound.org/people/klankbeeld/). [beach North Sea](https://freesound.org/people/klankbeeld/sounds/393584/#).
- [qubodup](https://freesound.org/people/qubodup/). [Fire Magic](https://freesound.org/people/qubodup/sounds/442872/).
- [magnuswaker](https://freesound.org/people/magnuswaker/). [Concrete SMASH 2](https://freesound.org/people/magnuswaker/sounds/522099/).
- [plagasul](https://freesound.org/people/plagasul/). [maxxbasswind.wav](https://freesound.org/people/plagasul/sounds/611/).

### Code

- **Adding audio**: Chris Ferdinandi. "[How to play a sound with JavaScript](https://gomakethings.com/how-to-play-a-sound-with-javascript/)." Go Make Things (blog). Accessed March 2, 2023

![GeeksForGeeks](https://img.shields.io/badge/GeeksforGeeks-gray?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c)

- **Basic HTML layout**: Pritish Nagpal. "[Rock, Paper and Scissor Game using Javascript](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)." GeeksForGeeks.org. Accessed February 26, 2023.

- **To hide buttons**: Rahul Uniyal. "[Hide elements in HTML using display property](https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/)." GeeksForGeeks.org. Accessed February 28, 2023.

![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

- **To reload a page**: gianebao. [Answer to "How to reload a page using JavaScript"](https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript?noredirect=1&lq=1). Stack Overflow. Accessed March 2, 2023.

### Wireframe

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### README.md:

**Template**:

- Othneil Drew. "[Best-README-Template](https://github.com/othneildrew/Best-README-Template)." GitHub.com. Accessed March 2, 2023.

**Badges**:

- Ileriayo Adebiyi. "[Markdown Badges](https://github.com/Ileriayo/markdown-badges)." GitHub.com. Accessed March 2, 2023.
- Shunsuke Mano. [Shields with icons](https://github.com/progfay/shields-with-icon/blob/master/Snippets.md). GitHub.com. Accessed March 2, 2023.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
