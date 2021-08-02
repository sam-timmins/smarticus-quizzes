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