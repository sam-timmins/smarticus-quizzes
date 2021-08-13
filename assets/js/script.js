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
const catagorySelectionRef = document.querySelectorAll('.catagory');

const maxQuestions = 10;
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
    runGame();
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
 * Opens sports question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */
function sportsQuestions() {

    insertCatagoryNameRef.innerHTML = 'Smarticus:  Sport';
    openQuestionScreen();
    hideCatagoriesGrid();
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
 * Main runGame loop, selecting the catagory based on relevant catagory click
 */
const runGame = () => {
    for (let catagorySelection of catagorySelectionRef) {
        catagorySelection.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'sport') {
                fetch('https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple')
                    .then(res => res.json())
                    .then(jsonData => extractData(jsonData.results))
                    .then(newData => console.log(newData))
                    .catch(res => console.log(res))
                sportsQuestions()
            } else if (this.getAttribute('data-type') === 'science') {
                fetch('https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple')
                    .then(res => res.json())
                    .then(jsonData => extractData(jsonData.results))
                    .then(newData => scienceQuestions(newData))
                    .catch(res => console.log(res))
            } else if (this.getAttribute('data-type') === 'film') {
                filmQuestions()
            } else if (this.getAttribute('data-type') === 'history') {
                historyQuestions()
            } else if (this.getAttribute('data-type') === 'animals') {
                animalQuestions()
            } else {
                alert('Unknown catagory, please try again.')
            }
        })
            
    }
}







userFormRef.addEventListener('submit', handleUserFormSubmit);
sportsQuestionsRef.addEventListener('click', sportsQuestions);
closeQuestionsRef.addEventListener('click', closeQuestionSection);