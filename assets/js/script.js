// Spin loader
const spinLoaderRef = document.querySelector('#spin-loader');

// Header
const headerRef = document.querySelector('#header');

// User Form
const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');

// Main catagory grid
const catagoryGridRef = document.querySelector('#main-catagory-grid');
const welcomeCatagoryGridRef = document.querySelector('#welcome-person');
const sportsQuestionsRef = document.querySelector('#catagorySports');
const scienceQuestionsRef = document.querySelector('#catagoryScience');
const filmQuestionsRef = document.querySelector('#catagoryFilm');

// Question screen
const questionsScreenRef = document.querySelector('#questions');
const insertCatagoryNameRef = document.querySelector('#quiz-catagory');
const closeQuestionsRef = document.querySelector('#close-questions');
const questionRef = document.querySelector('#question');
const optionsRef = Array.from(document.querySelectorAll('.option-text'));
const optionsContainerRef = Array.from(document.querySelectorAll('.options-container'));
const optionLetterRef = document.querySelector('.option');
const catagorySelectionRef = document.querySelectorAll('.catagory');
const scoreRef = document.querySelector('#score');
const questionNumberRef = document.querySelector('#question-number');

// Results screen
const resultsScreenRef = document.querySelector('#results-screen');
const resultsButtonRef = document.querySelector('#results-button');
const resultsUserRef = document.querySelector('#results-user');
const resultsScoreRef = document.querySelector('#results-score');

// Game variables
const maxQuestions = 10;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let questions = [];
let availableQuestions = [];

/**
 * Shows spin loader until DOM is loaded then displays the user form
 */
document.addEventListener('DOMContentLoaded', function() {
    spinLoadersRef.classList.add('spin-loader-vanish');
    handleScreenDisplay('flex', userSectionRef);
    userNameRef.focus();
})

/**
 * Close the questions section and returns to the catagory grid, 
 * also resets score and questionCounters
 */
const closeQuestionSection = () => {
    handleScreenDisplay('flex', headerRef);
    handleScreenDisplay('grid', catagoryGridRef);
    handleScreenDisplay('none', questionsScreenRef);
    resetCounters();
}

/**
 * Closes the results screen and returns to the catagory grid, 
 * also resets score and questionCounters
 */
const closeResultsScreen = () => {
    handleScreenDisplay('grid', catagoryGridRef);
    handleScreenDisplay('none', resultsScreenRef);
    handleScreenDisplay('flex', headerRef);
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
        default: 
            console.log('Display not recognised');
        break
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
    welcomeCatagoryGridRef.insertBefore(welcomeMesage, welcomeCatagoryGridRef.childNodes[0]);
    
    handleScreenDisplay('none', userSectionRef);
    handleScreenDisplay('grid', catagoryGridRef);
    handleScreenDisplay('flex', headerRef);
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */
const sportsQuestions = () => {
    handleScreenDisplay('none', headerRef);
    handleScreenDisplay('flex', questionsScreenRef);
    handleScreenDisplay('none', catagoryGridRef)
    insertCatagoryNameRef.innerHTML = 'Smarticus:  Sport';
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
    getQuestions(21);
    checkAnswer();
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title for science.
 */
const scienceQuestions = () => {
    handleScreenDisplay('none', headerRef);
    handleScreenDisplay('flex', questionsScreenRef);
    handleScreenDisplay('none', catagoryGridRef);
    insertCatagoryNameRef.innerHTML = 'Smarticus:  Science';
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
    getQuestions(17);
    checkAnswer();
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title for film.
 */
 const filmQuestions = () => {
    handleScreenDisplay('none', headerRef);
    handleScreenDisplay('flex', questionsScreenRef);
    handleScreenDisplay('none', catagoryGridRef);
    insertCatagoryNameRef.innerHTML = 'Smarticus:  Film';
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
    getQuestions(11);
    checkAnswer();
}

/**
 * Using API to generate questions then returns formatted data into the runQuiz function
 * @param number based on the catagory ID number provided by opentdb.com. Changes depending on the
 * catagory.
 */
const getQuestions = (questionId) => {
    fetch(`https://opentdb.com/api.php?amount=15&category=${questionId}&difficulty=medium&type=multiple`)
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
 * via a random number selection and add the question text to the html
 */
const getNewQuestion = () => {
    questionCounter++;
    questionNumberRef.innerHTML = `Question: ${questionCounter}`;
    if (questionCounter > maxQuestions){
        handleScreenDisplay('flex', resultsScreenRef);
        handleScreenDisplay('none', questionsScreenRef);
        displayResults();
    } else {
        const questionNumber = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionNumber];
            questionRef.innerHTML = currentQuestion.question;
            currentQuestion.answer.sort(() => 0.5 - Math.random());
            for (let i = 0; i < currentQuestion.answer.length; i++){
                optionsRef[i].innerHTML = currentQuestion.answer[i];
                }          
            availableQuestions.splice(questionNumber, 1);
            }
}

/**
 * Checks answers when they are clicked on. Adds to the score for a correct answer, 
 * adds correct or incorrect class to the selected option. If the answer is wrong, 
 * adds correct class to the correct answer then creates a small delay 
 * before getting a new question.
 */
const checkAnswer = () => {
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
}

/**
 * Increases the score by one
 */
const increaseScore = () => {
    score ++;
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
}

/**
 * Adds the username and score to the results screen
 */
const displayResults = () => {
    if (score >= 7){
        resultsUserRef.innerHTML = `${userNameRef.value}, you are indeed a Smarticus.`;
    } else if (score >= 4) {
        resultsUserRef.innerHTML = `${userNameRef.value}, that was not too bad...icus.`;
    } else {
        resultsUserRef.innerHTML = `${userNameRef.value}, maybe try another catagory...`;
    }
    
    resultsScoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
}

/**
 * Resets the score and the question counter
 */

const resetCounters = () => {
    score = 0;
    questionCounter = 0;
}







userFormRef.addEventListener('submit', handleUserFormSubmit);
sportsQuestionsRef.addEventListener('click', sportsQuestions);
scienceQuestionsRef.addEventListener('click', scienceQuestions);
filmQuestionsRef.addEventListener('click', filmQuestions);
closeQuestionsRef.addEventListener('click', closeQuestionSection);
resultsButtonRef.addEventListener('click', closeResultsScreen);