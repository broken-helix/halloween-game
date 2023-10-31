![Responsive Screenshot](/docs/responsive.jpg)

# **Ghost, Pumpkin, Death**
## **Site Overview**

Ghost, Pumpkin, Death is an interactive site, containing a Halloween version of the classic 'Rock, Paper, Scissors' game. 
The game is immediately built upon an earlier (non-Halloween) version, built for an assessed project submission.
The game is designed to be played by a single player, with the computer playing the opponent, Evil.
In this version, the Pumpkin scares away the ghost, who beats death because the ghost is already dead and death chops the pumkin up with the scythe. 
Pumkin > Ghost > Death > Pumpkin. 
Once the player selects an option, the computer selects a random choice and the selections are compared to see who won.
The site increments the scores of player and computer and uses a colour system to highlight the winner and loser.
The first to reach 9 points wins the game.
Alert boxes provide users with a guide on how to play the game and communicate whether they won or lost at the end of the game.

[View the live project here](https://broken-helix.github.io/halloween-game/).
***

## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Wireframes***](#wireframes)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Color Scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Current Features**](#current-features)
    * [***Page Title***](#page-title)
    * [***Challenge Area***](#challenge-area)
    * [***Images***](#images)
    * [***Controls Area***](#controls-area)
    * [***Choices Area***](#choices-area)
    * [***Game State Area***](#game-state-area)
    * [***Scores***](#scores)
    * [***Game Result:***](#game-result)
    * [***Information Area***](#information-area)
    * [***How To Play Button***](#how-to-play-button)
    * [***Reset Button***](#reset-button)
    * [***Alerts***](#alerts)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
***

## **Planning stage**

### **Wireframes:**

As the site involved customisation of a previous design, no wireframes were created for this iteration.  However, wireframes were used to plan out the design of the original site on desktop and mobile devices, which still mirror the outcome of this version.

![Desktop Wireframe](/docs/rockpaperscissorsdesktopwireframe.jpg)

![Mobile Wireframe](/docs/rockpaperscissorsmobilewireframe.jpg)
***

### **Target Audiences:**

* People who want to learn about the game of Rock, Paper, Scissors.
* People who want to play a halloween themed game.
* People who want to play a simple game of chance.
* Younger children who want to experience a simple, easy-to-play game.
***

### **User Stories:**

* As a user, I want to be able to play the game.
* As a user, I want the process of playing the game to be intuitive.
* As a user, I want to believe the game is one of chance.
* As a user, I want to be able to easily share the game with friends.
***

### **Site Aims:**

* To introduce the user to the Rock, Paper, Scissors game.
* For playing the game to be simple and intuitive.
* To keep a record of the total score.
* To provide the user with a clear indication of who won.
* To build an interactive site using HTML, CSS and Javascript.
***

### **Color Scheme:**

The color scheme was designed to incorporate orange and red, to indicate win and loss results, along with complementary colors.
Colors were selected using the coolors color palette generator.  <br><br>

![Coolors Palette](/docs/halloween-game-palette.jpg)
***

## **Typography**

* The fonts used throughout the game were selected from Google Fonts.
* The Halloween theme dictated the font selection for the major parts, with a font called '[Eater](https://fonts.google.com/specimen/Eater)' used for the title and '[Nosifer](https://fonts.google.com/specimen/Nosifer)' for most of the rest of the text.
* These fonts were styled to have a drop shadow, to help distinguish them from the dark background and maintain the moody visual appearance.
* To retain some clarity, a simple font, [Poppins](https://fonts.google.com/specimen/Poppins) was used for informational text, such as labels for areas or buttons.

![Eater Font](/docs/eater-font.jpg)
![Nosifer Font](/docs/nosifer-font.jpg)
![Poppins Font](/docs/poppins-font.jpg)
***

## **Current Features**

#### *Page Title:*

* The page title clearly indicates to the user what the site is about, in the choice of words and positioning at the top of the page, outside of the game area. The title condenses, so that the three words are displayed on top of one another on smaller screen sizes and a shadow effect has been used to improve readability.

![Page Title](/docs/title.jpg)

![Page Title Responsive](/docs/title-condensed.jpg)

#### *Challenge Area:*

* The challenge area holds all the elements required to play the game and display the outcome and points.  The site was styled to fit onto a mobile screen and then enlarged or reduced for other sizes as appropriate.

![Game Area](/docs/challenge-area.jpg)

#### *Images:*

* In the earlier Rock, Paper, Scissors iteration, icons from FontAwesome were employed within the borders of buttons and other elements on the page.  However, with limited Halloween options available in the free plan, only the [Question Mark](https://fontawesome.com/icons/question?s=solid&f=classic) icon was used for this project, with other images being used from Icojam on [Iconfinder](https://www.iconfinder.com/iconsets/materia-halloween-free).
* The background image was AI generated with Bing Chat, in creative mode.

![Background Image](/assets/images/backgrounds/background1.jpg)

#### *Controls Area:*

* The Control Area invites the player to select a ghoul and contains three horizontally aligned buttons containing different symbols, representing the options of Ghost, Pumpkin or Death.  When the player selects an option, further selections are disabled until the game result is displayed and the button border turns grey to feedback that the selection has been made.  Buttons return to the default state once they are reactivated.

![Control Area](/docs/buttons-selected.jpg)
​
#### *Choices Area:*

* The Choices area displays the choices made for the current game.  Initially two question mark symbols are displayed.

![Choices Area](/docs/choices-start.jpg)

* When the player selects an option from the buttons in the controls area, the selection replaces the question mark in the Player Choice element.

![Player Choice](/docs/player-choice.jpg)

* After a short delay, the computer's random selection is displayed and the game completes, showing the colours corresponding to the game result.  Draws or ties are displayed in a default dark colour.

![Computer Choice](/docs/computer-choice.jpg)

* Win and loss games display orange and red, respectively, for the separate choice icons.

![Win Lose Choice](/docs/win-choice.jpg)

#### *Game State Area:*

* The Game State area holds the scores and a central game result element, which shows whether the game was won, lost or drawn from the player's aspect once a game is initiated and the computer choice has been displayed.

![Game State Area](/docs/game-state.jpg)

#### *Scores:*

* The scores increment each time there is a win or loss game and change colour to show red for the opponent who is losing or orange for winning.

![Win State](/docs/win-state.jpg)

![Lose State](/docs/lose-state.jpg)

#### *Game Result:*

* The game result element shows a question mark when the page loads and as soon as a controls area button is pressed.  It then displays a text and colour indication of whether the game was won, lost or drawn.

![Draw State](/docs/draw-state.jpg)
​
#### *Information Area:*

* The information area, at the bottom of the game area, holds the buttons to reset the game back to the default state and to bring up an alert box which tells the player how to play the game and what the winning options are.

#### *How To Play Button:*

* The 'how to play' button uses an 'onclick' call in the html to call the function which displays the alert.  Sweet Alert 2 was installed to handle the alert.

#### *The Reset Button:*

* The reset button is activated via an event listener, which then resets the symbols, scores and colours to their default state.

#### *Alerts:*

* SweetAlert2 boxes are used to commuincate the game result to the player, inviting them to play again.

## **Future-Enhancements**

* Make the game appear fairer to the user by limiting the number of excess computer wins or weighting selections based on previous selections.
* Make player and computer choice elements spin around Y-axis before displaying the result.
* Make game playable for two human players.
* Add sound effects.
***

## **Testing Phase**

* Responsiveness - A mobile-first approach was used to develop the site, using the iPhone 12 profile in Chrome dev tools.  The site was tested for responsiveness on different screen sizes throughout the development stages, using chrome dev tools, which allowed the page to be adjusted to display on small and large screen sizes with media queries.  
​
* Functionality - Each button has been pressed to make sure it applies the correct result.  All possible combinations have been tested to ensure the colours display correctly.  The reset button was tested to make sure all colors returned to default, symbols returned to defaults and scores returned to 0.  After resets, the game has been tested to make sure it continues to be playable.  The game info button was tested to make sure the alert box appeared and could be closed again.

* Contrast - The contrast on the page was checked using the WCAG Color contrast checker plugin in chrome and found to nearly pass the tests. Further adjustments were resisted to reduce the impact on the dark mood of the site.

![WCAG Color Contrast Results](/docs/contrast.jpg)

* Lighthouse - The site was checked using the Lighthouse chrome plugin and found to pass most of the tests.

![lighthouse Result](/docs/lighthouse-mobile.jpg)
​
* Validators - The W3C validator was used to check both HTML and CSS.  JShint was utilised to check the javscript..

![HTML Validator](/docs/html.jpg)

![CSS Validator](/docs/css.jpg)

![JS Validator](/docs/jshint.jpg)
***

## **Bugs**

* Issue - The previous site used fonts for the icons and the svg icons used proved more difficult to change colour.
* Cause - Whilst there are way to change the colour of svg files, it depends on how they have been structured in order to generate a satisfatory outcome.
* Resolution -  The borders were changed instead.
***

## **Deployment**

I deployed the page on GitHub pages via the following procedure:
​
1. From the project's [repository](https://github.com/broken-helix/halloween-game), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message is displayed to indicate a successful deployment to GitHub pages and provide the live link.
​
The live site can be found at the following URL - [Ghost, Pumpkin, Death](https://broken-helix.github.io/halloween-game/).
***

## **Tech**
​
The following technologies were employed in the creation of the site:
​
- HTML
- CSS
- JS
- SweetAlert2
- Balsamiq Wireframes
***

## **Credits**

### **Honorable mentions**

* Without the Code Institute, I would never have created the original project, or taken place in the Halloween Hackathon which inspired this re-edit.  Many thanks to 'The Skeleton Crew' too, for stumbling through the web of git pulls and merges, highlighting the fonts and inspiring the design.
***

### **Content:**

* Fonts were sourced from [Google Fonts](https://fonts.google.com/).

* Icons for the social media links and why fly section were sourced from [Font Awesome](https://fontawesome.com/icons) and [Icon Finder](https://www.iconfinder.com/iconsets/materia-halloween-free).

* The Sweet Alert box was installed from [Sweet Alert](https://sweetalert2.github.io/).

* Wireframes were created using the [Balsamiq Wireframes](https://balsamiq.com/wireframes/) application.

* The background was AI generated using [Bing Chat](https://www.bing.com/new) in creative mode.
