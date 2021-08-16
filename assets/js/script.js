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
const catagorySelectionRef = document.querySelectorAll('.catagory');
const scoreRef = document.querySelector('#score');

const maxQuestions = 15;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let questions = [];
let availableQuestions = [];



/**
 * Shows spin loader for 4seconds then displays the user form
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
    showCatagoriesGrid()
    closeQuestionScreen()
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
    scoreRef.innerHTML = `${score} of ${maxQuestions}`;
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
    const questionNumber = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionNumber];
        questionRef.innerHTML = currentQuestion.question;


        for (let i = 0; i < currentQuestion.answer.length; i++){
            optionsRef[i].innerHTML = currentQuestion.answer[i];
            }
        
        availableQuestions.splice(questionNumber, 1);
        console.log(availableQuestions)


}

const checkAnswer = () => {
    optionsContainerRef.forEach(option => {
        option.addEventListener('click', event => {
            const selectedOption = event.target;
            const selectedAnswer = selectedOption.textContent;
            if (selectedAnswer == currentQuestion.correctAnswer){
                console.log('correct');
                increaseScore();
            } else {
                console.log('incorrect')
            }

            getNewQuestion()
        });
    });
}


/**
 * Increases the score by one
 */
const increaseScore = num => {
    num = 1;
    score += num;
    scoreRef.innerHTML = `${score} of ${maxQuestions}`;
}















userFormRef.addEventListener('submit', handleUserFormSubmit);
sportsQuestionsRef.addEventListener('click', sportsQuestions);
closeQuestionsRef.addEventListener('click', closeQuestionSection);