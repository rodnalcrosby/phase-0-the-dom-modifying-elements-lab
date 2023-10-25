// Write your code here!
// Remove the DOM node with id 'main'
const mainNode = document.getElementById('main');
mainNode.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute to 'victory'
newHeader.id = 'victory';

// Set the text content for the <h1> element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the <h1> element to the DOM (e.g., the body element)
document.body.appendChild(newHeader);
