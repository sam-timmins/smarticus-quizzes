// Spin loader
const spinLoaderRef = document.querySelector('#spin-loader');

// Header
const headerRef = document.querySelector('#header');
const logoRef = document.querySelector('#logo');
const headerTextRef = document.querySelector('#header-text');

// User Form
const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');

// Main catagory grid
const categoryGridRef = document.querySelector('#main-category-grid');
const welcomeCategoryGridRef = document.querySelector('#welcome-person');
const welcomeMessageRef = document.querySelector('#welcome-message');
const sportsQuestionsRef = document.querySelector('#categorySports');
const scienceQuestionsRef = document.querySelector('#categoryScience');
const filmQuestionsRef = document.querySelector('#categoryFilm');
const historyQuestionsRef = document.querySelector('#categoryHistory');
const musicQuestionsRef = document.querySelector('#categoryMusic');
const geographyQuestionsRef = document.querySelector('#categoryGeography');
const difficultyButtonsRef = document.querySelector('#difficulty-buttons');

//Difficulty radios
const easyRef = document.querySelector('#easy-diff');
const mediumRef = document.querySelector('#medium-diff');
const hardRef = document.querySelector('#hard-diff');

// Question screen
const questionsScreenRef = document.querySelector('#questions');
const insertCategoryNameRef = document.querySelector('#quiz-category');
const questionsMenuRef = document.querySelector('#questions-menu');
const questionRef = document.querySelector('#question');
const scoreRef = document.querySelector('#score');
const questionNumberRef = document.querySelector('#question-number');
const categorySelectionRef = document.querySelectorAll('.category');
const optionsRef = Array.from(document.querySelectorAll('.option-text'));
const optionsContainerRef = Array.from(document.querySelectorAll('.options-container'));

// Question screen menu
const questionsScreenMenuRef = document.querySelector('#questions-screen-menu');
const closeQuestionScreenMenuRef = document.querySelector('#close-questions-screen-menu');
const resetGameRef = document.querySelector('#reset-game');
const endGameRef = document.querySelector('#end-game');

// Results screen
const resultsScreenRef = document.querySelector('#results-screen');
const resultsButtonRef = document.querySelector('#results-button');
const resultsUserRef = document.querySelector('#results-user');
const resultsScoreRef = document.querySelector('#results-score');

// Footer
const footerRef = document.querySelector('#developer-name');

// Game variables
let difficultyLevel = '';
let questions = [];
let availableQuestions = [];
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
const maxQuestions = 10;
let letUserAnswer = false;

/**
 * Shows spin loader until DOM is loaded then displays the user form
 */
document.addEventListener('DOMContentLoaded', function() {
    handleScreenDisplay('none', spinLoaderRef);
    handleScreenDisplay('flex', userSectionRef);
    userNameRef.focus();
})

/**
 * Close the questions section and returns to the catagory grid, 
 * also resets score and questionCounters
 */
const closeQuestionSection = () => {
    handleScreenDisplay('flex', headerRef);
    handleScreenDisplay('grid', categoryGridRef);
    handleScreenDisplay('none', questionsScreenRef);
    handleScreenDisplay('inline', difficultyButtonsRef);
    handleScreenDisplay('flex', footerRef);
    resetCounters();
}

/**
 * Closes the results screen and returns to the catagory grid, 
 * also resets score and questionCounters
 */
const closeResultsScreen = () => {
    handleScreenDisplay('grid', categoryGridRef);
    handleScreenDisplay('none', resultsScreenRef);
    handleScreenDisplay('flex', headerRef);
    handleScreenDisplay('inline', difficultyButtonsRef);
    handleScreenDisplay('flex', footerRef);
    resetCounters();
}

/**
 * Opens the opening user form at the begining of the game. Resets the
 * previous entries and focuses the text box
 */
const userFormOpen = () => {
    handleScreenDisplay('none', categoryGridRef);
    handleScreenDisplay('none', difficultyButtonsRef);
    handleScreenDisplay('none', headerRef);
    handleScreenDisplay('none', footerRef);
    handleScreenDisplay('flex', userSectionRef);
    welcomeMessageRef.innerHTML = '';
    userNameRef.value = '';
    userNameRef.focus();
}

/**
 * Opens the question menu and hides the current game
 */
const openQuestionMenu = () => {
    handleScreenDisplay('flex', questionsScreenMenuRef);
    setTimeout(function(){
        handleScreenDisplay('none', questionsScreenRef);
    },1000)
}

/**
 * Closes the question screen menu and continues the users game
 */
const closeQuestionScreenMenu = () => {
    handleScreenDisplay('none', questionsScreenMenuRef);
    handleScreenDisplay('flex', questionsScreenRef);
}

/**
 * Changes the css display property of the html property
 * @param {string} displayProperty refers to the display property of the specific html element 
 * @param {HTMLElement} htmlRef refers to the const referance at the top of script.js
 */
const handleScreenDisplay = (displayProperty, htmlRef) => {
    switch (displayProperty) {
        case 'none':
            htmlRef.style.display = 'none';
            break;
        case 'flex':
            htmlRef.style.display = 'flex';
            break;
        case 'grid':
            htmlRef.style.display = 'grid';
            break;
        case 'inline':
            htmlRef.style.display = 'inline';
            break;
        default: 
            console.log('Display not recognised');
        break
    }
}

/**
 * Create the difficulty of the game depending on a selected radio button
 * by the user
 */
const difficulty = () => {
    if (easyRef.checked){
        difficultyLevel = 'easy';
    } else if (mediumRef.checked) {
        difficultyLevel = 'medium';
    } else if (hardRef.checked) {
        difficultyLevel = 'hard';
    }
}

/**
 * Logs the name of the user from user-form and then closes the user-form, 
 * adds name to the welcome box and opens catagory grid.
 */
const handleUserFormSubmit = event => {
    event.preventDefault();
    welcomeMessageRef.innerHTML = `Hi ${userNameRef.value}!`;   
    handleScreenDisplay('none', userSectionRef);
    handleScreenDisplay('grid', categoryGridRef);
    handleScreenDisplay('flex', headerRef);
    handleScreenDisplay('inline', difficultyButtonsRef);
    handleScreenDisplay('flex', footerRef);
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title. Displays the initial score until over written by increaseScore(). 
 */
const handleQuestionScreen = () => {
    handleScreenDisplay('flex', spinLoaderRef);
    handleScreenDisplay('none', categoryGridRef);
    handleScreenDisplay('none', headerRef);
    handleScreenDisplay('none', difficultyButtonsRef);
    handleScreenDisplay('none', footerRef);
    difficulty();
    // Closes spin loader and opens question screen after 3 seconds
    setTimeout(function(){
        handleScreenDisplay('flex', questionsScreenRef);
        scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
        handleScreenDisplay('none', spinLoaderRef);
    }, 3000)
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the sports questions.
 */
const sportsQuestions = () => {
    handleQuestionScreen();
    getQuestions(21, difficultyLevel);
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the science questions.
 */
const scienceQuestions = () => {
    handleQuestionScreen();
    getQuestions(17, difficultyLevel);
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the film questions.
 */
 const filmQuestions = () => {
    handleQuestionScreen();
    getQuestions(11, difficultyLevel);
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the history questions.
 */
 const historyQuestions = () => {
    handleQuestionScreen();
    getQuestions(23, difficultyLevel);
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the animals questions.
 */
 const musicQuestions = () => {
    handleQuestionScreen();
    getQuestions(12, difficultyLevel);
}

/**
 * Opens question and answer screen, closes the catagories grid, adds the catagory name 
 * into the title and inserts the geography questions.
 */
 const geographyQuestions = () => {
    handleQuestionScreen();
    getQuestions(22, difficultyLevel);
}

/**
 * Add the catagory name to the question screen
 * @param {string} catagory is dictated from the currentQuestion.catagory in getNewQuestion() 
 */
const addCatagoryToQuestionPage = (catagory) => {  
    insertCategoryNameRef.innerHTML = `Smarticus:  ${catagory}`;
}

/**
 * Using API to generate questions then returns formatted data into the runQuiz function
 * @param {number} questionId is based on the catagory ID number provided by opentdb.com. Changes depending on the catagory.
 * @param {string} difficulty is based on the checkbox selected in difficulty()
 */
const getQuestions = (questionId, difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=15&category=${questionId}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(jsonData => extractData(jsonData.results))
    .then(newData =>  runQuiz(newData))
    .catch(res => console.log(res))
}

/**
 * changes the API data into more user friendly look and creates an answers array using
 * the correct and incorrect answers 
 */
const extractData = listOfQuestions => {
    return listOfQuestions.map(item => {
        return {
            category:item.category,
            question:item.question,
            correctAnswer:item.correct_answer,
            answer:[...item.incorrect_answers, item.correct_answer]
        }
    })
}

/**
 * Create a copy of the questions array into availableQuestions and then call the
 * getNewQuestion function
 * @param {Array} questions is an array populated from the API
 */
const runQuiz = (questions) => {
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * Increases the questionCounter by one. Gets the new question from the availableQuestions array
 * via a random number selection and add the question text to the html. Also add the catagory to 
 * the question page using the catagory of the current question.
 */
const getNewQuestion = () => {
    if (questionCounter >= maxQuestions){
        handleScreenDisplay('flex', resultsScreenRef);
        handleScreenDisplay('none', questionsScreenRef);
        displayResults();
    // Creates a new question
    } else {
        increaseQuestionCounter();
        // Chooses a ramdom question from the availabelQuestions array
        const questionNumber = Math.floor(Math.random() * availableQuestions.length);
            // Assigns the random question to current question
            currentQuestion = availableQuestions[questionNumber];
            // Adds the question to the html
            questionRef.innerHTML = currentQuestion.question;
            // Creates a random sort of the current question answers
            currentQuestion.answer.sort(() => 0.5 - Math.random());
            // Adds the answers to the html of the options
            for (let i = 0; i < currentQuestion.answer.length; i++){
                optionsRef[i].innerHTML = currentQuestion.answer[i];
                }  
            availableQuestions.splice(questionNumber, 1);
            }
    addCatagoryToQuestionPage(currentQuestion.category);
    // Allows the user to answer a question
    letUserAnswer = true;
}

/**
 * Checks answers when they are clicked on. Adds to the score for a correct answer, 
 * adds correct or incorrect class to the selected option. If the answer is wrong, 
 * adds correct class to the correct answer then creates a small delay 
 * before getting a new question.
 */

optionsRef.forEach(option => {
    option.addEventListener('click', event => {
        if(letUserAnswer === false) return;
        // Prevents user from answering a question
        letUserAnswer = false;
        const selectedOption = event.target;
        const selectedAnswer = selectedOption.textContent;
        // If the answer is correct
        if (selectedAnswer == currentQuestion.correctAnswer){
            increaseScore();
            selectedOption.classList.add('option-correct')
            setTimeout(function(){
                selectedOption.classList.remove('option-correct')
                getNewQuestion()
            }, 1000)     
        // If the answer is incorrect
        } else {
            // Iterate through the answers and find the correct answer, then add options-correct class to it
            for (let i = 0; i < optionsRef.length; i++) {
                if (optionsRef[i].innerHTML == currentQuestion.correctAnswer){ 
                    optionsRef[i].classList.add('option-correct');
                    setTimeout(function(){
                        optionsRef[i].classList.remove('option-correct')
                    }, 1000)
                }
            }
            selectedOption.classList.add('option-incorrect')
            setTimeout(function(){
                selectedOption.classList.remove('option-incorrect')
                getNewQuestion()
            }, 1000)
        }
    });
});

/**
 * Increases the score by one
 */
const increaseScore = () => {
    score++;
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
}

/**
 * Increases the question counter by one
 */
const increaseQuestionCounter = () => {
    questionCounter++;
    questionNumberRef.innerHTML = `Question: ${questionCounter}`;
}

/**
 * Adds the username and score to the results screen
 */
const displayResults = () => {
    handleScreenDisplay('flex', footerRef);
    
    // Score above or equal to 8
    if (score >= 8 && difficultyLevel === 'hard'){
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. Especially on the hard ones!`;
    } else if (score >= 8 && difficultyLevel === 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. Go on, now try the hard ones!`;
    } else if (score >= 8 && difficultyLevel === 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. But they were only the easy ones!`;
    
    // Score above or equal to 5
    } else if (score >= 5 && difficultyLevel === 'hard') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Especially on the hard ones!`;
    } else if (score >= 5 && difficultyLevel === 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Nearly fit for the hard ones!`;
    } else if (score >= 5 && difficultyLevel === 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Bit more practice maybe!`;
    
    // Score below 5
    } else if (score < 5 && difficultyLevel === 'hard') {
        resultsUserRef.innerHTML = `${userNameRef.value}. ${currentQuestion.category} is tough, maybe drop it down a notch!`;
    } else if (score < 5 && difficultyLevel === 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}.  ${currentQuestion.category} maybe isn't your best topic but don't give up!`;
    } else if (score < 5 && difficultyLevel === 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}. ${currentQuestion.category} just didn't suit you. Maybe try another topic!`;
    }
    resultsScoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
}

/**
 * Resets the score, the question counter and all question arrays and objects
 */
const resetCounters = () => {
    score = 0;
    questionCounter = 0;
    questions = [];
    availableQuestions = [];
    currentQuestion = {};
}

// Header
logoRef.addEventListener('click', userFormOpen);
headerTextRef.addEventListener('click', userFormOpen);

// User Form
userFormRef.addEventListener('submit', handleUserFormSubmit);

// Catagories
sportsQuestionsRef.addEventListener('click', sportsQuestions);
scienceQuestionsRef.addEventListener('click', scienceQuestions);
filmQuestionsRef.addEventListener('click', filmQuestions);
historyQuestionsRef.addEventListener('click', historyQuestions);
musicQuestionsRef.addEventListener('click', musicQuestions);
geographyQuestionsRef.addEventListener('click', geographyQuestions);

// Question Screen
questionsMenuRef.addEventListener('click', openQuestionMenu);
endGameRef.addEventListener('click', closeQuestionSection);
closeQuestionScreenMenuRef.addEventListener('click', closeQuestionScreenMenu);
resultsButtonRef.addEventListener('click', closeResultsScreen);