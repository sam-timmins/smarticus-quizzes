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


/**
 * Shows spin loader for 4seconds then displays the user form
 */

document.addEventListener('DOMContentLoaded', function() {

    spinLoaderRef.classList.add('spin-loader-vanish');
    userSectionRef.style.display = 'flex';
    userRef.focus();
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
 * Logs the name of the user from user-form and then closes the user-form, 
 * adds name to the welcome box and opens catagory grid.
 */


userFormRef.addEventListener('submit', handleUserFormSubmit);

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


sportsQuestionsRef.addEventListener('click', sportsQuestions);

function sportsQuestions() {


    insertCatagoryNameRef.innerHTML = 'Smarticus:  Sport';

    openQuestionScreen();
    hideCatagoriesGrid();
}

/**
 * Close the questions section and returns to the catagory grid
 */


closeQuestionsRef.addEventListener('click', closeQuestionSection);

function closeQuestionSection() {
    showCatagoriesGrid()
    closeQuestionScreen()
}




/**
 * Get sports questions and create usable array
 */



const  getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple')
    .then(res => res.json())
    .then(jsonData => extractData(jsonData.results))
    .then(newData => console.log(newData))
    .catch(res => console.log(res));
}


const extractData = listOfQuestions => {
    return listOfQuestions.map(item => {
        return {
            question:item.question,
            correctAnswer:item.correct_answer,
            answers:[...item.incorrect_answers, item.correct_answer]
        }
    })
    
}


getQuestions()