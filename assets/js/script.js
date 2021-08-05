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
const spinLoaderRef = document.querySelector('#spin-loader');


/**
 * Shows spin loader for 4seconds then displays the user form
 */

window.addEventListener('load', hideSpinLoader);
function hideSpinLoader() {
    setTimeout(() => {
        hideUserFormRef.style.display = 'flex'
        spinLoaderRef.classList.add('spin-loader-vanish')
    }, 4000);
}

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


userFormRef.addEventListener('submit', handleUserFormSubmit);

function handleUserFormSubmit(event) {
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

const getQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple')
    .then(res => res.json())
    .then(jsonData => extractData(jsonData.results))
    .then(newData => console.log(newData))
    .catch(res => console.log(res))
}


const extractData = listOfQuestions => {
    return listOfQuestions.map(item => {
        return {
            question:item.question,
            correctAnswer:item.correct_answer,
            answer:[...item.incorrect_answers, item.correct_answer]
        }
    })
}

getQuestions()