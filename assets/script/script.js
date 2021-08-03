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


    // Hide user form
    let hideUserForm = document.querySelector('#user');
    hideUserForm.style.display = 'none';

    // Show catagories grid 
    let showCatagoriesGrid = document.querySelector('#main-catagory-grid');
    showCatagoriesGrid.style.display = 'grid';
}


/**
 * Opens sports question and answer box and closes the catagories grid
 */

const openSportsQuestions = document.querySelector('#catagorySports');
openSportsQuestions.addEventListener('click', sportsQuestions);

function sportsQuestions(){
    // Hide grid for catagories
    let hideCatagories = document.querySelector('#main-catagory-grid');
    hideCatagories.style.display='none';

    // Show questions section
    let openQuestionScreen = document.querySelector('#questions');
    openQuestionScreen.style.display = 'flex';

    // Add catagory title
    let catagoryName = document.querySelector('#quiz-catagory');
    catagoryName.innerHTML = 'Smarticus:  Sport';
}

/**
 * Close the questions section and return to the catagory grid
 */

const closeQuestions = document.querySelector('#close');
closeQuestions.addEventListener('click', closeQuestionSection);

function closeQuestionSection(){
    // Show catagories grid 
    let showCatagories = document.querySelector('#main-catagory-grid');
    showCatagories.style.display = 'grid';

    // Close questions sction
    let closeQuestionSection = document.querySelector('#questions');
    closeQuestionSection.style.display = 'none';
}
