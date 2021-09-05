// Spin loader
const spinLoaderRef = document.querySelector('#spin-loader');

// Header
const headerRef = document.querySelector('#header');

// User Form
const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');

// Main catagory grid
const categoryGridRef = document.querySelector('#main-category-grid');
const welcomeCategoryGridRef = document.querySelector('#welcome-person');
const sportsQuestionsRef = document.querySelector('#categorySports');
const scienceQuestionsRef = document.querySelector('#categoryScience');
const filmQuestionsRef = document.querySelector('#categoryFilm');
const historyQuestionsRef = document.querySelector('#categoryHistory');
const animalsQuestionsRef = document.querySelector('#categoryAnimals');
const geographyQuestionsRef = document.querySelector('#categoryGeography');
const difficultyButtonsRef = document.querySelector('#difficulty-buttons');

//Difficulty radios
const easyRef = document.querySelector('#easy-diff');
const mediumRef = document.querySelector('#medium-diff');
const hardRef = document.querySelector('#hard-diff');

// Question screen
const questionsScreenRef = document.querySelector('#questions');
const insertCategoryNameRef = document.querySelector('#quiz-category');
const closeQuestionsRef = document.querySelector('#close-questions');
const questionRef = document.querySelector('#question');
const categorySelectionRef = document.querySelectorAll('.category');
const scoreRef = document.querySelector('#score');
const questionNumberRef = document.querySelector('#question-number');
const optionsRef = Array.from(document.querySelectorAll('.option-text'));
const optionsContainerRef = Array.from(document.querySelectorAll('.options-container'));

// Results screen
const resultsScreenRef = document.querySelector('#results-screen');
const resultsButtonRef = document.querySelector('#results-button');
const resultsUserRef = document.querySelector('#results-user');
const resultsScoreRef = document.querySelector('#results-score');

// Footer
const footerRef = document.querySelector('#developer-name');

// Game variables
const maxQuestions = 10;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let questions = [];
let availableQuestions = [];
let difficultyLevel = '';

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
    resetCounters();
}

/**
 * Changes the css display property of the html property
 * @param {''} displayProperty refers to the display property of the specific html element 
 * @param {''} htmlRef refers to the const referance at the top of script.js
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
    
    let welcomeMesage = document.createElement('p');
    welcomeMesage.innerHTML = `Hi ${userNameRef.value}!`;
    welcomeCategoryGridRef.insertBefore(welcomeMesage, welcomeCategoryGridRef.childNodes[0]);
    
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
 const animalsQuestions = () => {
    handleQuestionScreen();
    getQuestions(27, difficultyLevel);
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
 * @param string this is dictated from the currentQuestion.catagory in getNewQuestion() 
 */
const addCatagoryToQuestionPage = (cat) => {  
    insertCategoryNameRef.innerHTML = `Smarticus:  ${cat}`;
}

/**
 * Using API to generate questions then returns formatted data into the runQuiz function
 * @param number based on the catagory ID number provided by opentdb.com. Changes depending on the
 * catagory.
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
    } else {
        increaseQuestionCounter();
        const questionNumber = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionNumber];
            questionRef.innerHTML = currentQuestion.question;
            currentQuestion.answer.sort(() => 0.5 - Math.random());
            for (let i = 0; i < currentQuestion.answer.length; i++){
                optionsRef[i].innerHTML = currentQuestion.answer[i];
                }          
            availableQuestions.splice(questionNumber, 1);
            }
    addCatagoryToQuestionPage(currentQuestion.category);
}



/**
 * Checks answers when they are clicked on. Adds to the score for a correct answer, 
 * adds correct or incorrect class to the selected option. If the answer is wrong, 
 * adds correct class to the correct answer then creates a small delay 
 * before getting a new question.
 */

optionsRef.forEach(option => {
    option.addEventListener('click', event => {
        const selectedOption = event.target;
        const selectedAnswer = selectedOption.textContent;
        if (selectedAnswer == currentQuestion.correctAnswer){
            increaseScore();
            selectedOption.classList.add('option-correct')
            setTimeout(function(){
                selectedOption.classList.remove('option-correct')

                getNewQuestion()
            }, 1000)     
        } else {
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
    if (score >= 8 && difficultyLevel == 'hard'){
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. Especially on the hard ones!`;
    } else if (score >= 8 && difficultyLevel == 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. Go on, now try the hard ones!`;
    } else if (score >= 8 && difficultyLevel == 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus on ${currentQuestion.category}. But they were only the easy ones!`;
    } else if (score >= 5 && difficultyLevel == 'hard') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Especially on the hard ones!`;
    } else if (score >= 5 && difficultyLevel == 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Nearly fit for the hard ones!`;
    } else if (score >= 5 && difficultyLevel == 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}, not bad...icus on ${currentQuestion.category}. Bit more practice maybe!`;
    } else if (score < 5 && difficultyLevel == 'hard') {
        resultsUserRef.innerHTML = `${userNameRef.value}. ${currentQuestion.category} is tough, maybe drop it down a notch!`;
    } else if (score < 5 && difficultyLevel == 'medium') {
        resultsUserRef.innerHTML = `${userNameRef.value}.  ${currentQuestion.category} maybe isn't your best topic but don't give up!`;
    } else if (score < 5 && difficultyLevel == 'easy') {
        resultsUserRef.innerHTML = `${userNameRef.value}. ${currentQuestion.category} just didn't suit you. Maybe try another topic!`;
    }
    resultsScoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
}


/**
 * Resets the score and the question counter
 */

const resetCounters = () => {
    score = 0;
    questionCounter = 0;
    questions = [];
    availableQuestions = [];
    currentQuestion = {};
}

// User Form
userFormRef.addEventListener('submit', handleUserFormSubmit);

// Catagories
sportsQuestionsRef.addEventListener('click', sportsQuestions);
scienceQuestionsRef.addEventListener('click', scienceQuestions);
filmQuestionsRef.addEventListener('click', filmQuestions);
historyQuestionsRef.addEventListener('click', historyQuestions);
animalsQuestionsRef.addEventListener('click', animalsQuestions);
geographyQuestionsRef.addEventListener('click', geographyQuestions);

// Question Screen
closeQuestionsRef.addEventListener('click', closeQuestionSection);
resultsButtonRef.addEventListener('click', closeResultsScreen);