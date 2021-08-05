const hideUserFormRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userRef = document.querySelector('#user-name');
const hideCatagoryGridRef = document.querySelector('#main-catagory-grid');
const showCatagoryGridRef = document.querySelector('#main-catagory-grid');
const welcomeCatagoryGridRef = document.querySelector('#welcome-person');
const openQuestionsScreenRef = document.querySelector('#questions');
const closeQuestionsScreenRef = document.querySelector('#questions');
const openSportsQuestionsRef = document.querySelector('#catagorySports');
const insertCatagoryNameRef = document.querySelector('#quiz-catagory');
const closeQuestionsRef = document.querySelector('#close-questions');


/**
 * Hides the user form
 */
const hideUserForm = () => {
    hideUserFormRef.style.display = 'none';
}

/**
 * Hides the catagories grid
 */
const hideCatagoriesGrid = () => {
    hideCatagoryGridRef.style.display='none';
}

/**
 * Shows the catagories grid
 */ 
const showCatagoriesGrid = () => {
    showCatagoryGridRef.style.display = 'grid';
}

/**
 * Shows the questions section
 */
const openQuestionScreen = () => {
    openQuestionsScreenRef.style.display = 'flex';
}

/**
 * Closes the questions sction
 */
const closeQuestionScreen = () => {
    closeQuestionsScreenRef.style.display = 'none';
}

/**
 * Logs the name of the user from user-form and then closes the user-form, 
 * adds name to the welcome box and opens catagory grid.
 */


userFormRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    let welcomeMesage = document.createElement('p');
    welcomeMesage.innerHTML = 'Hi ' + userRef.value + '!';
    welcomeCatagoryGridRef.insertBefore(welcomeMesage, welcomeCatagoryGridRef.childNodes[0]);
    
    hideUserForm();
    showCatagoriesGrid();
}


/**
 * Opens sports question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */


openSportsQuestionsRef.addEventListener('click', sportsQuestions);

const sportsQuestions = () => {


    insertCatagoryNameRef.innerHTML = 'Smarticus:  Sport';

    openQuestionScreen();
    hideCatagoriesGrid();
}

/**
 * Close the questions section and returns to the catagory grid
 */


closeQuestionsRef.addEventListener('click', closeQuestionSection);

const closeQuestionSection = () => {
    showCatagoriesGrid()
    closeQuestionScreen()
}