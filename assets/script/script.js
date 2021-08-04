// Hide user form
function hideUserForm(){
    let hideUserForm = document.querySelector('#user');
    hideUserForm.style.display = 'none';
}

// Hide catagories grid
function hideCatagoriesGrid(){
    let hide = document.querySelector('#main-catagory-grid');
    hide.style.display='none';
}

// Show catagories grid 
function showCatagoriesGrid(){
    let show = document.querySelector('#main-catagory-grid');
    show.style.display = 'grid';
}

// Show questions section
function openQuestionScreen(){
    let openScreen = document.querySelector('#questions');
    openScreen.style.display = 'flex';
}

// Close questions sction
function closeQuestionScreen(){
    let close = document.querySelector('#questions');
    close.style.display = 'none';
}

/**
 * Logs the name of the user from user-form and then closes the user-form, 
 * adds name to the welcome box and opens catagory grid.
 */

const userForm = document.querySelector('#user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    let user = document.querySelector('#user-name');
    let welcomeDiv = document.querySelector('#welcome-person');
    let welcomeMesage = document.createElement('p');
    welcomeMesage.innerHTML = 'Hi ' + user.value + '!';
    welcomeDiv.insertBefore(welcomeMesage, welcomeDiv.childNodes[0]);
    
    hideUserForm();
    showCatagoriesGrid();
}

/**
 * Opens sports question and answer box, closes the catagories grid, adds the catagory name 
 * into the title.
 */

const openSportsQuestions = document.querySelector('#catagorySports');
openSportsQuestions.addEventListener('click', sportsQuestions);

function sportsQuestions(){

// Add catagory title
    let catagoryName = document.querySelector('#quiz-catagory');
    catagoryName.innerHTML = 'Smarticus:  Sport';

    openQuestionScreen();
    hideCatagoriesGrid();
}

/**
 * Close the questions section and returns to the catagory grid
 */

const closeQuestions = document.querySelector('#close');
closeQuestions.addEventListener('click', closeQuestionSection);

function closeQuestionSection(){
    showCatagoriesGrid()
    closeQuestionScreen()
}
