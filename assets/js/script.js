const userSectionRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userNameRef = document.querySelector('#user-name');
const catagoryGridRef = document.querySelector('#main-catagory-grid');
const welcomeCatagoryGridRef = document.querySelector('#welcome-person');
const questionsScreenRef = document.querySelector('#questions');
const sportsQuestionsRef = document.querySelector('#catagorySports');
const insertCatagoryNameRef = document.querySelector('#quiz-catagory');
const closeQuestionsRef = document.querySelector('#close-questions');
const spinLoaderRef = document.querySelector('#spin-loader');
const questionRef = document.querySelector('#question');
const optionsRef = Array.from(document.querySelectorAll('.option-text'));
const optionsContainerRef = Array.from(document.querySelectorAll('.options-container'));
const optionLetterRef = document.querySelector('.option');
const catagorySelectionRef = document.querySelectorAll('.catagory');
const scoreRef = document.querySelector('#score');
const resultsScreenRef = document.querySelector('#results-screen');
const resultsButtonRef = document.querySelector('#results-button');

const maxQuestions = 2;
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
    score = 0;
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
 function closeQuestionSection() {
    showCatagoriesGrid();
    closeQuestionScreen();
}

/**
 * Opens the results screen and closes the question screen
 */
const openResultsScreen = () => {
    closeQuestionScreen();
    resultsScreenRef.style.display = 'flex';
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
function handleUserFormSubmit(event) {
    event.preventDefault();
    
    let welcomeMesage = document.createElement('p');
    welcomeMesage.innerHTML = 'Hi ' + userNameRef.value + '!';
    welcomeCatagoryGridRef.insertBefore(welcomeMesage, welcomeCatagoryGridRef.childNodes[0]);
    
    hideUserForm();
    showCatagoriesGrid();
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */
function sportsQuestions() {
    openQuestionScreen();
    hideCatagoriesGrid();
    insertCatagoryNameRef.innerHTML = 'Smarticus:  Sport';
    scoreRef.innerHTML = `Score: ${score} / ${maxQuestions}`;
    getSportQuestions();
    checkAnswer();
}

/**
 * Opens question and answer box, closes the catagories grid, adds the catagory name 
 * into the title for science.
 */
function scienceQuestions() {

    insertCatagoryNameRef.innerHTML = 'Smarticus:  Science';
    openQuestionScreen();
    hideCatagoriesGrid();
}

/**
 * Using API to generate sports questions
 */
function getSportQuestions(){
    fetch(`https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple`)
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
 function runQuiz(questions){
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
        questionCounter = 0;
    } else {
        const questionNumber = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionNumber];
            questionRef.innerHTML = currentQuestion.question;


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
                console.log('incorrect')
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















userFormRef.addEventListener('submit', handleUserFormSubmit);
sportsQuestionsRef.addEventListener('click', sportsQuestions);
closeQuestionsRef.addEventListener('click', closeQuestionSection);
resultsButtonRef.addEventListener('click', closeResultsScreen);