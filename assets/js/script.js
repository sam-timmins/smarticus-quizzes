const hideUserFormRef = document.querySelector('#user');
const userFormRef = document.querySelector('#user-form');
const userRef = document.querySelector('#user-name');
const hideCatagoryGridRef = document.querySelector('#main-catagory-grid');
const showCatagoryGridRef = document.querySelector('#main-catagory-grid');
const welcomeCatagoryGridRef = document.querySelector('#welcome-person');
const openQuestionsScreenRef = document.querySelector('#questions');
const closeQuestionsScreenRef = document.querySelector('#questions');
const openSportsQuestionsRef = document.querySelector('#catagorySports');
const catagoryNameRef = document.querySelector('#quiz-catagory');
const closeQuestionsRef = document.querySelector('#close-questions');


// Hide user form
function hideUserForm(){
    hideUserFormRef.style.display = 'none';
}

// Hide catagories grid
function hideCatagoriesGrid(){
    hideCatagoryGridRef.style.display='none';
}

// Show catagories grid 
function showCatagoriesGrid(){
    showCatagoryGridRef.style.display = 'grid';
}

// Show questions section
function openQuestionScreen(){
    openQuestionsScreenRef.style.display = 'flex';
}

// Close questions sction
function closeQuestionScreen(){
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

function sportsQuestions(){

// Add catagory title

    catagoryNameRef.innerHTML = 'Smarticus:  Sport';

    openQuestionScreen();
    hideCatagoriesGrid();
}

/**
 * Close the questions section and returns to the catagory grid
 */


closeQuestionsRef.addEventListener('click', closeQuestionSection);

function closeQuestionSection(){
    showCatagoriesGrid()
    closeQuestionScreen()
}