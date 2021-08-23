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


\
&nbsp;
[Back to Top](#table-of-contents)
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
* For the loading spinner I used [loading.io](https://loading.io/)
* For the box shadows I used [html-css-js.com](https://html-css-js.com/css/generator/box-shadow/)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Testing
## Layout
During the building of the quiz, I changed my design layout slightly from my initial wireframes design. I felt that the inclusion of a footer restricted the user’s ability to quickly and cleanly play the game. Instead of all the option boxes being within the screen height, the user would have had to scroll in order to see option D. Along with the being able to include the __Smarticus__ name on every page so the user doesn't loose contact, I felt that it was a correct design choise to omit the footer.

In relation to responsive design, in my initial planning stages I thought that a final responsive screen size of min-width 992px would be sufficient, however the layout did not suit extra large screens of greater than or equal to 1200px so I added an extra media query to the design, this was a very little extra work for a big gain for larger screen users.



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