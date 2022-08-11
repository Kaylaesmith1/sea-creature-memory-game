<!-- # Sea Creatures Memory Game

This underwater themed memory game is a simple game designed for children but fun for all ages. Sixteen tiles make up a total of eight pairs of animals found in an underwater environment. Using cognitive memory skills, the player flips the cards until all matches are found. 

Since game is meant for young children, there is no timer or number of lives included. By taking their time and thinking hard about card placement, a player can strengthen their memory without feeling rushed by a time or 'lives left' constraint. 

![Responsive Mockup](assets/docs/responsive_game.png)

## Features 

This is an interactive website is a 16-tiled memory game with each card dipicting an underwater animal. There are eight animals on the faces of the cards, and a coral scene on the back. The game is won by matching all eight animal pairs.

The game board is set up in a 4x4 grid in an opaque container overlaying a deep underwater photo. Above the gameboard is the title of the game: 'Sea Creature Memory'. Just below the grid are two clicable buttons: one to reset the game and the second to see rules of play.

### Existing Features

- __Sixteen clickable cards__

  - The square gameboard is made up of a total of 16 cards that will flip 180° when clicked. 
  - The front face of each card is one of eight underwater animals centered on a white background.

    ![FrontFace](assets/docs/card_front.png)

  - The back face of all cards is the same, depicting a coral reef on a white background.

    ![BackFace](assets/docs/card_back.png) 

  - If a match is made, the cards will remain face up until the end of play and the game is reset. If no match occurs, both cards will flip back over and remain clickable for future guesses.
    

- __Two clickable buttons__

  - RESET BUTTON - EDIT
  - RULES BUTTON - EDIT

- __The landing page image__

  - **LEFT OFF HERE** The landing includes a photograph of a typcial Fair crowd with an opaque text box of where the Iowa State Fair is located and an invitation to join. 

![LandingPage](assets/docs/landing_page.png)

- When and Where Section

  - The start of this section includes a sentence describing what, when and where the Iowa State Fair is and its importance on a state, national and international scale. 
  - Immediately following, users can see dates and times for the 2022 Iowa State Fair as well as a short list of activities they can expect to find at the Fair. In the center, this year's Iowa State Fair logo appears and bifurcates the written information in the section.  

![EndGame](assets/docs/end_game.png)

- __Location section__

  - Here on a photo of the Iowa State Capitol, the user learns that the Fair takes place in Des Moines, Iowa (the capital city) and there are various modes of transport to arrive at the fairgrounds. The image is covered by an opaque shadow, thus ensuring the user is focused on the informational text and not the photo. 

![Location](docs/location_mockup.png)

- __The Footer__ 

  - In the footer section I've included links to four prominent social media sites for the Iowa State Fair. These are real websites that will give the user more information and the ability to follow the Iowa State Fair's social media.
  - All links open to new tabs when clicked and the icons turn red when hovered over, making them easily visible and user-friendly.

![Footer](docs/footer_mockup.png)

- __History__

  - The history section includes four columns with different categories providing important information for Fair-goers this year, both those returning and first-timers. 
  - For website users that are hearing about the Iowa State Fair for the first time, this page will give them a little insight on the event. As such, there are two clickable links included in this section to give further explanation, each of which will open in a new tab. 

![History](docs/history_mockup.png)

- __Get Involved Signup Form__

  - The signup form includes a dropdown menu for the user to select a department, followed by three more required fields. The final text box is for the user to detail how they would like to get involved with the Iowa State Fair in any capacity they see fit. Upon submission, a congratulatory message appears, letting the user know they have signed up successfully. The form URL was taken from the Code Institute Love Running project and aesthetically and informationally adapted for this website.

![Sign Up](docs/form_mockup.png)

- __Fair Photos__
  - The final page of the website is a photo gallery of what a visitor to the Iowa State Fair would typically see. These range from this year's banner to prize-winning produce and livestock to food and crowds and of course, the Butter Cow. 
  - With these colorful pictures, hopefully the user's interest is peaked and they will want to learn more about the Iowa State Fair and the state of Iowa itself.

![Photos](docs/fair_photos_mockup.png)

### Features Left to Implement

- Map on Homepage: I had originally included a Google map on the homepage, which was ultimately a casualty of media queries that I couldn't get quite right. I would like to include a map in the future as it would be a helpful reference to have for anyone visiting the Iowa State Fair.
- Embeded video: Another aspect of media that would be beneficial to users would be a YouTube video of some of the Iowa State Fair's events. There are a plethora of activities at the Fair and it would be more interactive to show those through video rather than written media.

## Testing 

- The website itself was tested on Chrome, Safari and Firefox web browsers using a laptop computer. It was also designed to be responsive on a range of devices, using the Responsive setting on Chrome DevTools to simulate sizes. 

  The images on the third page when using Safari on a laptop appear with more spacing than they do using Chrome. On this page, too, a slight horizontal scroll is needed on some smaller devices to view the entire image.
- The social media links in the footer and the two hyperlinks in the history section of the second page were tested and work correctly. All open in new tabs.
- The signup form was tested and, when filled out and submitted correctly, returns a congratulatory message noting that completion was successful. 

![FormSubmit](docs/test_form_mockup.png)

- At the outset of troubleshooting, the footer only appeared visible on the first page, though the information was there and interactive (clickable icons). I found this was because I hadn't linked the fontawesome script on the other pages, the website was just using the html. This is fixed now and visible on all pages.

- I encountered an error when running the HTML validator on the second and third pages that stated I couldn't use unnamed sections. This was solved with help from the CI slack channels and, ultimately, with changing the section in question into a div. This will be kept in mind for future projects. There are no errors now in the HTML validator on any of the three pages submitted.

- I used metric measurements on the second page in describing the Butter Cow and in the Fun Facts sections. In a professional setting, this website's most direct audience would be from the United States and, therefore would probably better understand the imperial system but I chose to use the metric system for the benefit of the Code Institute reviewers who I assume are more familiar with metric measurements. If the website were launched in Iowa or the United States, the values would be converted.

- To complete my testing phase, I ran each page through Lighthouse in Chrome DevTools, both desktop and mobile versions. The results are below:

  Homepage (desktop and mobile)
![Lighthouse](docs/lighthouse_index.png)
![Lighthouse](docs/lighthouse_index_mobile.png)
Get Involved page (desktop and mobile)
![Lighthouse](docs/lighthouse_history.png)
![Lighthouse](docs/lighthouse_history_mobile.png)
Fair Photos page (desktop and mobile)
![Lighthouse](docs/lighthouse_photos.png)
![Lighthouse](docs/lighthouse_photos_mobile.png)


### Validator Testing 

- HTML
  - No errors were found when the code was passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html). This was tested and is true for all three pages of the website.

  ![ValidatorHTML](docs/html_no_errors.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

  ![ValidatorCSS](docs/css_no_errors.png)

### Unfixed Bugs and Improvements

To my knowledge, I have been able to identify and fix bugs that popped up throughout this project. 

That said, there is definitely room for improvement. Firstly, and perhaps most noticeably, with regard to the photos on the third page. 

Using Safari on a laptop distorts the spacing but I chose to leave this as-is because the images themselves aren't distorted. The spacing issue could be due to inadequate media queries, which would be a question of my coding ability more than a break in the web browser or technologies themselves. 

Given that Chrome is usually the browser of choice, especially in the tech industry, I concentrated on ensuring the website was fully functional and aesthetically pleasing there before I focused on other browswers. As such, I've left the images as the appear with no annexed documentation for Safari. 

Secondly, the photo in the landing section of the homepage might look a little blurry or pixilated. I deliberately chose an image that was slightly unclear and with more muted colors since I wasn't planning on overlaying an opacity as I do in other sections where text is over a photo. 

This way, I would argue that the first glance is still bright and alluring but doesn't distract from the "Come to Des Moines, IA & Join the Fun!" bubble. From the start, I wanted to engage the reader and urge them to investigate further.

Thirdly, I am sure my CSS could be more concise. There are many aspects (margins, padding, etc.) that are the same in a few classes or ids with only one or two differences. If I can consolidate the similarities in the future, the code might be more readable and "cleaner".

Continuing on the 'cleanliness of code' front, the Get Involved! page might appear a bit wordy. To combat this, the layout could be wider for the amount of information presented.

Lastly, some of the State Fair information isn't up to date for the 2022 year. In those cases, I used information from the 2021 Iowa State Fair.

## Deployment

I deployed this website to GitHub pages on the GitHub hosting platform following the steps below: 


  - Once in my personal GitHub repository for this project, I clicked the Settings cog button.
  - From there I clicked 'Pages' from the left side menu. 
  - Next under 'Source' I selected the main branch,  refreshed the page and a link to the live site was provided, indicating successful deployment.

  ![Deployment](docs/github_pages_mockup.png)


The live link can be found here - https://kaylaesmith1.github.io/ia-state-fair-history/


## Credits 
### Content 

- I would like to acknowledge the Iowa State Fair and credit the organization with the color scheme, photos,logo, and information displayed on this website. I do not own any of the content; this website was created strictly for educational purposes within the Code Institute project framework.

- I would like to thank my mentor, Harry, and other students and alumni on slack for the pointers and valuable feedback they've given me throughout this process. I've learned some excellent tips and their support has been vital in being able to submit my first portfolio project.

- The social media icons found in the footer were taken from [Font Awesome](https://fontawesome.com/)

- I used Stack Overflow for general troubleshooting and, specifically, the background image opacity / repeat options.

- The congratulatory pop-up that appears on the Get Involved page after filling out the form is also a product of Code Institute and was used solely to ensure the form worked correctly.

- Lastly, I would like to credit Code Institute for my use of the zoom effect on the homepage. This code was taken from the Love Running walkthrough project and used for the same effect on this webpage. 

### Media

- The photos used on this website are from the [Iowa State Fair website](https://iowastatefair.org) and a Google search of 'Iowa State Fair'. -->