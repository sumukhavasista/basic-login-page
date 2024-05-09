// Get the elements
var container = document.querySelector('.container');
var containerReverse = document.querySelector('.container-reverse');
var toggleContainer = document.querySelector('.toggle-container');

// Function to toggle the container
function toggleReverseContainer() {
    container.classList.toggle('rotate-container');
    containerReverse.classList.toggle('show-container');
}

// Add event listener to the toggle link
toggleContainer.addEventListener('click', toggleReverseContainer);
