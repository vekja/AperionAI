// Assuming you have a button element with the id "button"
const button = document.getElementById('button');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Perform an action when the button is clicked
  // You can make an API request here using fetch or any other AJAX library
  
  // Example using fetch:
  fetch('your-backend-api-url')
    .then(response => response.json())
    .then(data => {
      // Handle the API response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the API request
      console.error(error);
    });
});
