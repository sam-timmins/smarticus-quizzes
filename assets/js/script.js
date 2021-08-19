// Spin loader
const spinLoaderRef = document.querySelector('#spin-loader');
// User Form
const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');
// Main catagory grid
const catagoryGridRef = document.querySelector('#main-catagory-grid');
const welcomeCatagoryGridRef = document.querySelector('#welcome-person');
const sportsQuestionsRef = document.querySelector('#catagorySports');
const scienceQuestionsRef = document.querySelector('#catagoryScience');
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
    spinLoaderRef.classList.add('spin-loader-vanish');
    userSectionRef.style.display = 'flex';
    userNameRef.focus();
})

/**
 * Hides the user form
 */
const hideUserForm = () => {
    userSectionRef.style.display = 'none';
}

/**
 * Hides the catagories grid
 */
const hideCatagoriesGrid = () => {
    catagoryGridRef.style.display='none';
}

/**
 * Shows the catagories grid
 */ 
const showCatagoriesGrid = () => {
    catagoryGridRef.style.display = 'grid';
}

/**
 * Shows the questions section
 */
const openQuestionScreen = () => {
    questionsScreenRef.style.display = 'flex';
}

/**
 * Closes the questions sction
 */
const closeQuestionScreen = () => {
    questionsScreenRef.style.display = 'none';
}

/**
 * Close the questions section and returns to the catagory grid
 */
const closeQuestionSection = () => {
    showCatagoriesGrid();
    closeQuestionScreen();
}

/**
 * Opens the results screen and closes the question screen
 */
const openResultsScreen = () => {
    closeQuestionScreen();
    resultsScreenRef.style.display = 'flex';
    displayResults();
}

/**
 * 
 */
const closeResultsScreen = () => {
    resultsScreenRef.style.display = 'none';
    showCatagoriesGrid();
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
    
    hideUserForm();
    showCatagoriesGrid();
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */
const sportsQuestions = () => {
    openQuestionScreen();
    hideCatagoriesGrid();
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
    openQuestionScreen();
    hideCatagoriesGrid();
    insertCatagoryNameRef.innerHTML = 'Smarticus:  Science';
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
    getScienceQuestions();
    checkAnswer();
}

/**
 * Using API to generate science questions
 */
const getScienceQuestions = () => {
    fetch(`https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple`)
    .then(res => res.json())
    .then(jsonData => extractData(jsonData.results))
    .then(newData =>  runQuiz(newData))
    .catch(res => console.log(res))
}

/**
 * Using API to generate sports questions
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
    console.log(availableQuestions);
    getNewQuestion();
}

/**
 * Increases the questionCounter by one. Gets the new question from the availableQuestions array
 * via a random number selection and add the question text to the html
 */
const getNewQuestion = () => {
    questionCounter++;
    if (questionCounter > maxQuestions){
        openResultsScreen();
    } else {
        const questionNumber = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionNumber];
            questionRef.innerHTML = currentQuestion.question;

            currentQuestion.answer.sort(() => 0.5 - Math.random());
            for (let i = 0; i < currentQuestion.answer.length; i++){
                optionsRef[i].innerHTML = currentQuestion.answer[i];
                }
            
            availableQuestions.splice(questionNumber, 1);
            console.log(availableQuestions)
            }
}

/**
 * Checks answers when they are clicked on. Adds to the score for a correct answer, 
 * adds correct or incorrect class to the selected option then creates a small delay 
 * before getting a new question.
 */
const checkAnswer = () => {
        optionsRef.forEach(option => {
        option.addEventListener('click', event => {
            const selectedOption = event.target;
            const selectedAnswer = selectedOption.textContent;
            if (selectedAnswer == currentQuestion.correctAnswer){
                console.log('correct');
                increaseScore();
                selectedOption.classList.add('option-correct')
                setTimeout(function(){
                    selectedOption.classList.remove('option-correct')
                    getNewQuestion()
                    console.log(questionCounter);
                }, 800)     
            } else {
                console.log('incorrect');
                selectedOption.classList.add('option-incorrect')

                setTimeout(function(){
                    selectedOption.classList.remove('option-incorrect')
                    getNewQuestion()
                    console.log(questionCounter);
                }, 800)
            }
        });
    });
}

/**
 * Increases the score by one
 */
const increaseScore = num => {
    num = 1;
    score += num;
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








userFormRef.addEventListener('submit', handleUserFormSubmit);
sportsQuestionsRef.addEventListener('click', sportsQuestions);
scienceQuestionsRef.addEventListener('click', scienceQuestions);
closeQuestionsRef.addEventListener('click', closeQuestionSection);
resultsButtonRef.addEventListener('click', closeResultsScreen);