Random Guesser game documentation
Project overview

The Random Guesser Game is a web-based application in which users guess a randomly generated number between 1 and 100. Players have a limited number of attempts to guess the correct number. And the application will reply if the guessed number is too high or too low.
File structure

bash

/random-guesser-game
│
├── index.html            # Landing page
├── game.html             # Game interface
├── contact.html          # Contact form page
│
├── /assets/              # Directory for images and other assets
│   └── /images/          # Folder for images
│       └── GameStar(3).png
│
├── /css/                 # Folder for CSS files
│   ├── style.css         # Custom CSS styles
│   └── general.css       # General styles (if needed)
│
├── /js/                  # Folder for JavaScript files
│   ├── script.js         # Main JavaScript file for game logic
│   ├── gamehint.js       # JavaScript file for game hints
│   └── validator.js      # JavaScript file for form validation

1. Index.html

This is the landing page of the application. There is a logo and welcome message with a link to start the game.


2. Game.html

This file contains the main game interface:

    Title: Includes navigation links to the home page and contact page.
    Game section: Where players enter their guesses.
    Results display: Shows the results of the estimates. remaining effort and signal
    Instructions section: Provides tips and rules for the game.

3. Contact.html

This page contains a form for sending messages to users. Includes username, email, and message fields.
CSS styles (style.css)
General format:

    Reset Style: Normalizes margins and padding for consistency across browsers.
    Font: Use "Roboto" for a clean, modern look.
    Color Scheme: A consistent color palette defined using CSS variables for easy customization.



Title

    Background: Style with primary color for contrast.
    Navigation: Use Flexbox layouts for responsiveness

Main character

    Centered header layout and structured input form
    Input Element: Style for use with fill and hover effects.

Showing results

    Visibility: Improve readability with padding and background colors.

footnote:

    Design: Dark background with highlighted text for a clean look.

Responsive design

    Media Queries: Optimized layout for small screens Ensures usability on mobile devices

javascript file
1. script.js

Modify basic game logic including:

    random number generation
    Verifying the correctness of user input
    Provide feedback on estimates (too high, too low, right).

2.gamehint.js

Controls the display of game codes and rules. This allows the user to click a button to highlight the recommendation section.
3. Validator.js

Review the contact form data entry to ensure that required fields are filled in correctly. It displays error messages as necessary.
How to carry out the project

    Clone storage or download files
    Open index.html on your web browser.
    Navigate to the game or contact page as desired.

Future improvements

    Leaderboard: Use the feature to record and display high scores.
    User Authentication: Allows users to create accounts to track progress.
    Mobile app version: Consider converting your game into a mobile app for a wider reach.
