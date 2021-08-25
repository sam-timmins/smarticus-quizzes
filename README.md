# Smarticus


# Goal for this Project
"I AM SMARTICUS!"

Smarticus is an online quiz that allows the user to select form several catagories and prove that they are indeed 'Smarticus' or just a big thumbs down. 

# Table of Contents
* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
     * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
        * [Structure](#structure)
    * [Wireframes](#wireframes)
    * [Features](#features)
        * [Existing Features](#existing-features)
        * [Features to be implemented](#features-to-be-implemented)
    * [Technologies used](#technologies-used)
        * [Languages](#languages)
        * [Tools and Libraries](#tools-and-libraries)
    * [Testing](#testing)
        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
    * [Credits](#credits)
# UX

## User Goals
* Visually appealing, not cluttered with information or images.
* Easily navigate through.
* Medium standard of difficulty for the questions.
* Rating on performance.

## User Stories
* As a user, I want to have the site personalised to my username.
* As a user, I want to have clear options to the catagories to choose from.
* As a user, I want to see my score progress during a quiz catagory.
* As a user, I want to see my rating based on my score after completing a category. 
* As a user, I want to exit out of a set of catagory questions and back to the main selection page.


## Site owners Goals
* Create an easily navigated site using a single page format.
* Create a visually appealing site through choce of colours and layout.
* Give feedback to the user on performance.
* Have a touch of humour to make the user experience more fun.
* Ensure that a username mush be entered in order to proceed.

### Requirements
* Responsive design, based on mobile first.
* Use single page layout.
* Give a positive user experience through colours and layout.
* Give feedback based of performance.

### Expectations
* I expect to know that this is my game based on my username.
* I expect that all the catagory choices lead to the correct questions.
* I expect to be able to exit out of a catagory back to my personalised landing page.
* I expect feedback on performance.
* I expect screen size not to affect the quality of my experience.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Design Choices

### Fonts

I have used [Google Fonts](https://fonts.google.com/ "Google Fonts") to aid me in seclecting a suitable font. In order to keep the font for this game to a clean and simple look, I have chosen [Noto Serif](https://fonts.google.com/specimen/Noto+Serif?query=noto&preview.text=Smarticus&preview.text_type=custom#standard-styles). This is the only one that I will use as I don't feel there is enough content involved to warrent complicating the look with different fonts for headers and text.

### Icons

I will use some icons to enhance the user experience for the choice of catagories, they will not be stand alone but there to accompany the text and break up te look of all text. The icons will be sourced from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). 

### Colours
In order to create the colour scheme for the quiz, I used [Colourmind](http://colormind.io/). I went the the generate new website colours until I found a colour that I likes, locked it in and kept going to get my basic scheme. I decided that as this was not a complex project where lots of different colours were needed, I would only use three. The generated colour scheme can be seen [here](wireframes/colour-pallet-original.jpg). 

When I checked the contrast in [WebAIM](https://webaim.org/resources/contrastchecker/ "WebAIM"). Where the two colours were gray and white, I had an instant pass on the contrast checker, the results are [here](wireframes/contrast-checker-black-on-white.jpg). However, I had some fails on the tests where the background was red and the foreground was white, the result can be seen [here](wireframes/contrast-checker-fail-white-on-red.jpg). After a small adjustment the results passed and are [here](wireframes/contrast-checker-white-on-red.jpg), I created my final pallet.

\
&nbsp;

![Colour Pallet](wireframes/colour-pallet.jpg)

\
&nbsp;
The colours use are explained from left to right:
* #9F2323 (red) This will be the base colour that will be on the header, also for any forms or information, such as the username input and feedback sections. 
* #F5F6F4 (white) This will be used as a background colour on the catagories grid, but primerilary as a font colour.
* #3A3232 (grey) This will be used mostly as a background colour for the questions card but also as a font colour where the background is white.

\
&nbsp;

During the building of the quiz, I realised that I required a colour to indicate if a correct answer was submitted. I will go into more detail of this in the [testing section](#testing). I again used [Colourmind](http://colormind.io/) and using my existing pallet to gain a complimentary green.
\
&nbsp;
* #51855f (green) This will show when the user has selected a correct answer.
\
&nbsp;

![Colour Pallet](wireframes/colour-green.jpg)

\
&nbsp;

### Structure

I will be building my website with a mobile first approach. Using the chrome developer tools to give me the iPhone 5/SE (320px), I will use this as the smallest screen size for styling. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/ "Bootstrap").

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Wireframes

In order to develop my wireframes, I have used [Balsamiq](https://balsamiq.com/wireframes/). i created the mobile verision firstly and then the tablet and desktop versions followed. As it is a requirement that the site is on one static page, I have broken my wireframes down to reflect. 

The wireframes can be viewed below.

[Mobile Wireframe](wireframes/mobile.png)

[Tablet Wireframe](wireframes/tablet.png)

[Desktop Wireframe](wireframes/desktop.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Features

## Existing Features

### Spin Loader

The spin loader is, regardles of the screen size always located in the middle of the screen. The size is standard and the colours are consistant with the design. The spin loader apears while the DOM content is loading. Usually it won't be seen at this point, but is there as a fall back if something doesn't load correctly. It also appears on when the catagory is selected by the user for one second for a cleaner user experience while the questions are being fetched from the API.

\
&nbsp;
![Spin Loader](wireframes/loader.gif)
\
&nbsp;

### Welcome Screen

The welcome screen, as the name suggests, is where the user will be immediatly directed to. The content of the screen, regardles of screen size, is positioned in the middle. On smaller screen sizes where there is a pop-up keyboard, the design is responsicve to that so all aspects can always be seen.

\
&nbsp;
![Textbox](wireframes/user-form-with-keypad.jpg)

\
&nbsp;

On loading, to reduce user clicks, the textbox is set to focus, the colour also changes to grey when it is in this state. 

* *active textbox*
\
&nbsp;
![Textbox in focus](wireframes/user-form-text-focus.jpg)

When out of focus, the textbox is white. 

* *idle textbox*
\
&nbsp;
![Textbox in idle](wireframes/user-form-text.jpg)

One of the site owners goals was to ensure that a user name was entered to personalise the game, this is done with html validation.
\
&nbsp;

* *textbox validation*
\
&nbsp;
![Textbox validation](wireframes/user-form-validation.jpg)
\
&nbsp;

The button, which is consistant with the design of buttons across the game, uses a font-awsome icon to give the user simple instruction of what to do next. There are a number of indications to the user that it is to be used to progress through the game.

* A box-shadow highlights it.
* A simple animation if the user was to hover over it.
* A curser set to pointer.

\
&nbsp;
![Spin Loader](wireframes/button-animation.gif)
\
&nbsp;

Very importantly, the site owners name is shown on the welcome screen. The font size and logo are clearly larger than the text, however not to overpowering that they take up all the screen.

Under the site owners name is a small amount of text giving simple instruction to the user of the first step to take.

* *Phone*
\
&nbsp;
![Welcome Screen](wireframes/user-form-screen-phone.jpg)
\
&nbsp;

* *Tablet*
\
&nbsp;
![Welcome Screen](wireframes/user-form-screen-tablet.jpg)
\
&nbsp;

* *Desktop*
\
&nbsp;
![Welcome Screen](wireframes/user-form-screen-desktop.jpg)
\
&nbsp;

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Quiz Category Screen

This screen is has the **Smarticus** logo fixed as a permenant header to the page. This being consistant with the site owner's name being present on every screen so the user doesn't loose contact with the owner. It is large enough to be easily read but not too big as to impeed the user's view of the catagories.

* *Header view on initial load of the categories screen*
\
&nbsp;
![Welcome Screen](wireframes/category-screen-header1.jpg)
\
&nbsp

* *Header view when scrolled down the categories screen*
\
&nbsp;
![Welcome Screen](wireframes/category-screen-header.jpg)
\
&nbsp;

The personalisation of the game begins at this point. Whatever the user decided to enter on the welcome screen, is carried forwards to here and is used as part of a quick, to the point welcome message with instruction.

*User name input on welcome screen*
\
&nbsp;
![Welcome Screen User Name Input](wireframes/user-name-entered.jpg)
\
&nbsp;

*Welcome message on categories screen*
\
&nbsp;
![Welcome Message on Categories Screen](wireframes/user-name-entered-categories-screen.jpg)
\
&nbsp;

The catagories are clean and clear with their description and are also helped visually with a font-awsome icon. The text and icon alternate from left to right, giving a more comfortable feel to the user's eye as the scan through the screen. The alternating colour scheme is a sharp design which encourages the user to scroll down on smaller devices to see all the catagories. On the desktop design, the categories are set to fill the screen height so there is no need for scrolling. They are also set to adjust the position of catagories, depending on how the checker pattern changes with the screen size. 

To increase user experience, rather than just the text having to be clicked inorder for the user to progress to the chosen catagory, the whole colour block it sits in carries out this function. This allows the user not to have to be as precise with their actions.
\
&nbsp;

* *Phone and tablet*

![Catagories Screen](wireframes/category-screen.jpg)
\
&nbsp;

* *Desktop*

![Catagories Screen](wireframes/catagory-screen-desktop.jpg)
\
&nbsp;

* *XL - Desktop*

![Catagories Screen](wireframes/catagory-screen-large-desktop.jpg)
\
&nbsp;


### Question Screen 

As mentioned earlier, the spin loader screen initally apears everytime the user opens up the question screen while the questions are loading, details on this are in the [spin loader](#spin-loader) section of existing features.

This screen is the main game screen. It is sectioned into 3 areas:
* Quiz progress details 
* The question
* The answers

![Catagories Screen](wireframes/quiz-screen.jpg)
\
&nbsp;

The quiz progress details again can be split up into four parts:
* The catagory
* The score
* The question
* Close screen icon

![Catagories Screen](wireframes/quiz-screen-details.jpg)
\
&nbsp;

The catagory, in keeping with the rest of the screens, has **Smarticus** included in it to keep the user in touch with the site owner's name. It also then displays the catagory of the question asked, this is pulled from the API.

The score is then displayed beneath the catagory. The format is 'correct answers / number of questions asked'. The correct answers increments for each correct answer that is answered by the user and the number of question's is dictated by the developer within the code so stays static on the display itself. 

The close button is located in the top right corner of the screen. This exits out of the current set of quiz questions and returns back to the personalised catagories screen. It also resets the users score and the question number.

Finally the question number displays to the user how many questions have been asked. This increments for every time that the user get presented with a new question.


The question is populated using the API, and is set to a larger font that the rest of the screen, for clarity to the user.

The answers are designed to be as simple to look at as possible, but also pack in enough information as needed. There is an option identification, A, B, C and D and these are in contrast colours to the actual answer itself.

If the answer selected is correct, the option selected flashes green before moving to the next question in the catagory.

![Correct Answer](wireframes/quiz-screen-correct-answer.gif)
\
&nbsp;

If the answwer is incorrect, the selected option flashes red and also the correct answer flashes green so the user can learn form their mistake.

![Incorrect Answer](wireframes/quiz-screen-incorrect-answer.gif)
\
&nbsp;

### Results Screen

The results screen has very little content, except the essesntials. 
* The site owner's name and logo
* Feedback text
* Final score
* Return button

![Results Screen, low score](wireframes/results-screen-low-score.jpg)
\
&nbsp;

![Results Screen, medium score](wireframes/results-screen-medium-score.jpg)
\
&nbsp;

![Results Screen, high score](wireframes/results-screen-high-score.jpg)
\
&nbsp;






\
&nbsp;

## Features to be Implemented



\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Technologies used

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")

## Tools
* For construction and deployment [Gitpod](https://www.gitpod.io/ "Gitpod")
* For wireframes [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* For HTML validation [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* For CSS validation [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* For JS syntax validator [Esprima](https://esprima.org/demo/validate.html "Esprima")
* For the loading spinner [loading.io](https://loading.io/ "loading.io")
* For the box shadows [html-css-js.com](https://html-css-js.com/css/generator/box-shadow/ "html-css-js.com")
* For information on favicons [W3C](https://www.w3.org/2005/10/howto-favicon "W3C")
* For general code queries [W3Schools](https://www.w3schools.com/ "W3Schools")
* For quiz code help [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw "James Q Quick")
* For the colour pallet [Colourmind](https://colormind.io/ "colourmind")
* For the loading spinner gif in the readme file [Capture to a Gif](https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh/related?hl=en "Chrome Web Store") 



\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Testing
## Layout
During the building of the quiz, I changed my design layout slightly from my initial wireframes design. I felt that the inclusion of a footer restricted the user’s ability to quickly and cleanly play the game. Instead of all the option boxes being within the screen height, the user would have had to scroll in order to see option D. Along with the being able to include the __Smarticus__ name on every page so the user doesn't loose contact, I felt that it was a correct design choise to omit the footer.

In relation to responsive design, in my initial planning stages I thought that a final responsive screen size of min-width 992px would be sufficient, however the layout did not suit extra large screens of greater than or equal to 1200px so I added an extra media query to the design, this was a very little extra work for a big gain for larger screen users.

Occasionally, with using the API to generate questions, a long answer was generated. This caused the option boxes to have the text spill over and on some occasions loose the text outside of the 100vh that I had wanted to in order to hit the single page format goal. A change of stying of the options container's heights to auto solved this issue, along with the use of display flex and justify-content, space-evenly on their parent. 

As mentioned earlier in the [Colours](#colours) section, I had to add to add a green to my pallet. This came as a suggestion from people that I used for testing. They felt that they needed to have some sort of feedback when an answer was answered wrong, with the correct answer shown. An alert was recommended or some sort of pop-up screen with the correct answer included in it and the user then clicks through it to the next question. This idea however would have ment that the user would have had to carry out another action by clicking or tapping on a button to progress. I didn't feel that this was slick enough so decided to add a flash of green on the correct answer if the incorrect option was selected. Initially I had the timer set for 0.8 seconds but this wasn't just enough time to read the correct answer before the next question was loaded. I adjusted this to 1 second and I feel it works great now.

A second suggestion that was fed back to me during testing was a simple thing to overcome, everyone mentioned that they didn't like the autocomplete on the user name input form. They felt that it covered over the screen and took away from the design. I felt that it improved user friendliness but the argument put back to me was that predictive text does not require many extra clicks, gives the same result but doesn't take from the design. A quick autocomplete set to off on the form within the html fixed this.

```html

<form class="center-all" id="user-form" autocomplete="off" 

```

The third recomendation was that there should be a question counter added to the game screen. The testing team noted that they would like to know how many questions that they had answered throughout the game. As this information was already being captured as the questionCounter, this was a simple addition to the screen.

The initial score layout I had was not clear either. I had the layout set up as "3 of 10". This really was not clear to the user. Instead of a simple glance and instantly see what it refered to, there was some working out to it. An addition of the word 'Score' and a more generic score layout solved this.

\
&nbsp;
![Score layout](wireframes/score-layout.jpg)
\
&nbsp;

An issue I didn't realise that I had until I opened the quiz on Google Chrome following deployment, rather than through the Gitpod terminal, was that the favicon was not showing. Initially I had learnt that just putting it into the root folder would ensure that it showed up in on the tab, however it didn't appear, so using [W3C](https://www.w3.org/2005/10/howto-favicon "W3C") as guidence I added it to the head section of the html and it worked perfectly.

With this being my first project using JavaScript, naturally I encountered some issues that I had to work through.

One of my major headaches was getting the initial array of data from the API out to use. I lost many hours attempting to work this out. Eventually, after a lot of commits when I thought I had it, then deleting when I really didn't and some help from my mentor, I worked it out. This was a huge moment for me as JavaScript then started to then make sense. 

When I ran test on the quiz, I quickly realised that the initial itteration of the question answers into the option boxes alway left the correct answer as option D. This led to a very easy way to cheat if the user worked this out. I had carried out some research and came across the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Fisher-Yates shuffle"), although this was gaining the random number to slot the correct anser into, I felt that there was no need for a more complex, multy line code to be included as there was only four options. I added a random sort to the function where a new question is generated, and this simple method works well.



\
&nbsp;

## Unfixed Bugs




\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Deployment

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Credits



\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;