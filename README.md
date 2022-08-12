# Sea Creatures Memory Game

This underwater themed memory game is a simple game designed for children but fun for all ages. Sixteen tiles make up a total of eight pairs of animals found in an underwater environment. Using cognitive memory skills, the player flips the cards until all matches are found. 

Since the game is meant for young children, there is no timer or number of lives included. By taking their time and thinking hard about card placement, a player can strengthen their memory without feeling rushed by a time or 'lives left' constraint. 

![GameBoard](assets/docs/game_board.png)

## Features 

This is an interactive website is a 16-tiled memory game with each card dipicting an underwater animal. There are eight animals on the faces of the cards, and a coral scene on the back. The game is won by matching all eight animal pairs.

The game board is set up in a 4x4 grid in an opaque container overlaying a deep underwater photo. Above the gameboard is the title of the game: 'Sea Creature Memory'. Just below the grid are two clicable buttons: one to reset the game and the second to see rules of play.

### Existing Features

- __Sixteen clickable cards__

  - The square gameboard is made up of a total of 16 cards that will flip 180° when clicked. 
  - The front face of each card is one of eight underwater animals centered on a white background.

![FrontFace](assets/docs/card_front_animals.png)

  - The back face of all cards is the same, depicting a coral reef on a white background.

![BackFace](assets/docs/card_back.png) 

  - If a match is made, the cards will remain face up until the end of play and the game is reset. If no match occurs, both cards will flip back over and remain clickable for future guesses.

![PartialPlay](assets/docs/partial_play.png) 

- __Two clickable buttons__

  - Reset button - The reset button will flip all cards back over so the back face is showing. The cards will be randomized again and the number of moves will be reset to zero. 
  - Rules button - When the rules button is clicked, a responsive html overlay will appear with the rules of the game. To return to the gameboard and play the game, the player will need to click the "Let's play!" button.

![ResetRulesButtons](assets/docs/reset_rules_button.png)

![Rules](assets/docs/rules.png)
    
![ResponsiveRules](assets/docs/rules_responsive.png)

- __The landing page__

  - The responsive landing page is an html overlay outlining a few important benefits of playing memory. To start playing the game, the player clicks the "I'm ready!" button, the text box disappears and the player can start.

![LandingPage](assets/docs/landing_page.png)

![ResponsiveLandingPage](assets/docs/landing_page_responsive.png)

- The responsive game board shows 16 square tiles with a back face image of a coral reef on a white background. A player clicks the cards in an attempt to find a matching pair of underwater animals. Once all 8 pairs are found, the game is won.
- The number of moves is counted and increases by one for every two cards flipped, regardless of a match. This means, the highest possible score is 8 moves.
- In the footer of the opaque game board, I have listed myself as the creator of this website and linked my professional LinkedIn acctount and the GitHub repository for this project. Both links open in new tabs. 

![GameBoard](assets/docs/game_board.png)

![ResponsiveGameBoard](assets/docs/responsive_game.png)

![EndGame](assets/docs/end_game.png)

### Features Left to Implement

- Originally, I had wanted to use a GIF or a YouTube video on a loop of an underwater scene for the background. I think it would give a cool effect but the stagnant image I found suits the page, too. 

  In future, I could explore using keyframes and working with animation of still photos in that way, though I don't feel that the current still image is a detriment to the project as a whole.

- To further increase difficulty, levels could be incorporated to encourage older or more advanced users to play. By adding two or four more pairs, the game could take on higher skill level. 

  A timer could also clock the player's score, encouraging the player to beat their time in each round.

- It could be interesting to have a "high scores" page that would include the player's username, number of moves and time it took to win the game. This could be done by saving information in local storage and calling it with a function on the appropriate page. 

## Testing 

- This game was tested on Chrome, Safari and Firefox web browsers using a laptop computer and an Apple mobile phone (iphone 8 plus). It was designed to be responsive on a range of devices, using the Responsive setting on Chrome DevTools to simulate sizes. 

- Both links in the footer of the gameboard open in new tabs when clicked. Both links work properly. 

- I ran each aspect of the page through Lighthouse separately in Chrome DevTools using display block or display none to target the benefits, gameboard and rules sections. The desktop and mobile version results are show below. 

  The two final scores are of the webpage tested as it would be run in a live environment, also in desktop and mobile.

Landing page, benefits overlay only (desktop and mobile)
![Lighthouse](assets/docs/lighthouse_landing_desktop.png)
![Lighthouse](assets/docs/lighthouse_landing_mobile.png)

Gameboard only (desktop and mobile)
![Lighthouse](assets/docs/lighthouse_gameboard_desktop.png)
![Lighthouse](assets/docs/lighthouse_gameboard_mobile.png)

Rules overlay only (desktop and mobile)
![Lighthouse](assets/docs/lighthouse_rules_desktop.png)
![Lighthouse](assets/docs/lighthouse_rules_mobile.png)

Full game (desktop and mobile)
![Lighthouse](assets/docs/lighthouse_fullgame_desktop.png)
![Lighthouse](assets/docs/lighthouse_fullgame_mobile.png)


### Validator Testing 

- HTML
  - No errors were found when the code was passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html). This was tested and is true for all three pages of the website.

  ![ValidatorHTML](assets/docs/html_validator_noerrors.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css) though there was a warning. I believe this could be attributed to importing font styles from Google Fonts at the top of the style.css page.
  
  ![ValidatorWarningCSS](assets/docs/css_validator_warning.png)

- JavaScript
  - No errors were found in the JavaScript file when it was run through the [(JShint) validator](https://jshint.com/) but there were warnings, an excerpt of which is shown in the first screenshot below. The second screenshot displays no warnings as I rectified those that were present at the outset.

![ValidatorWarningJS](assets/docs/js_warnings.png)

![ValidatorWarningJS](assets/docs/jsvalidator.png)


### Encountered Bugs and Improvements

- To my knowledge are there no unfixed bugs. I will detail below the bugs I identified throughout the creation of this game and the steps I took to solve the issues. 

- There were problems with Safari that, to my knowledge, were fixed by running the CSS through the [Autoprefixer CSS](https://autoprefixer.github.io/) website. 
![SafariDesktopProblem](assets/docs/bug_safari_desktop.png)

- The "reset" and "rules" buttons were aligned to the left though I had programmed them to be center-aligned through CSS so I thought something was overriding my styling that I wasn't seeing. 

  I asked for help in a Slack channel and a fellow student, Eoghan Behan provided a solution to remove the margin: auto I had, add a display: flex and align and justify the items to center. This worked and I kept this solution in the final project.

- On clicking two cards that didn't match, both remained face up and listed the pair as a match in the console. The idea is for non-matcing cards to automatically flip back over. I received help from one of the tutors, Sean, who alerted me to event bubbling and the use of 'event.currentTarget' to remove the toggle class on my cards and ensure they flipped automatically. We also discussed and fixed the erroneous 'match' in the console.

![ErroneousMatch](assets/docs/bug_erroneous_match.png)

- At one point my images were not displaying properly. This was due to having called them incorrectly. I fixed this by right clicking an image in my folder and having a look at the relative path. I then changed the folder my images should be in and now they are all showing properly.

![Images404](assets/docs/bug_404_images.png)

- Clicking the "rules" button did now correctly execute my eventListener to display my rules overlay. I consulted a [YouTube video](https://bobbyhadz.com/blog/javascript-cannot-read-property-addeventlistener-null). The problem was my const rulesButton variable was calling a rules ID (#rules) rather than the rules class (.rules) I needed. This is fixed now. 

![NullEventListener](assets/docs/bug_null_eventListener.png)

## Deployment

I deployed this website to GitHub pages on the GitHub hosting platform following the steps below: 


  - Once in my personal GitHub repository for this project, I clicked the Settings cog button.
  - From there I clicked 'Pages' from the left side menu. 
  - Next under 'Source' I selected the main branch,  refreshed the page and a link to the live site was provided, indicating successful deployment.

  ![Deployment](assets/docs/deployment_github.png)


The live link can be found here - https://kaylaesmith1.github.io/sea-creature-memory-game/


## Credits 
### Content 

- I used fonts from [Google Fonts](https://fonts.google.com/) for this project. The squid icon on the left side of the browser tab was created using [Favicon](https://www.favicon.cc/).

- I used Stack Overflow for general troubleshooting and issues with grid spacing.

- The images used for the front and backs of the cards and the underwater image background are all from a Google search.

- Information for the homepage overlay, "Benefits of the game" was taken from the [Walnut Montessori-Preschool Academy](https://www.walnutmontessori-preschool.com/why-kids-should-play-memory) website.

- I would like to acknowledge Code Institue's tutor, Sean, in helping solve a problem I had with an eventListener. He helped me work through the problem, ultimately giving a solution that worked and that I implemented in the final project. He also supplied further information to learn about event bubbling, a concept I'd not seen before.

  Feedback and comments from the reviewer of my PP1 were taken into account for this project when running tests and identifying and fixing bugs. Per their suggestion, I have included screenshots of bugs in this README file to better document the solution process.

  Colleagues on the slack channels have also been helpful, specifically Eoghan Behan who gave a solution to a problem with button alignment on the gameboard page. By removing the specific margin and using display: flex; I was able to justify and center the content. The buttons appear centered now in the final project.

  Finally, I would like to thank my mentor, Harry, for guiding me at the outset of PP2 in keeping in mind the assessment criteria and the importance of working through and validating each section of JavaScript as you go. He suggested that I work on the functionality of the actual game first and then tackle the CSS, which was good adivce. He has been quick to give helpful feedback during this process and is always available. I appreciate his insight.


### Media

- I also found a [YouTube tutorial](https://www.youtube.com/watch?v=-tlb4tv4mC4) that I used for help in writing an array in JavaScript for the gameboard layout rather than using HTML. I also followed his style of writing functions to create this game. 