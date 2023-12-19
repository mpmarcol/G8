// Get the input element and submit button
const inputElement = document.getElementById("reg-nombre");
// const submitButton = document.getElementById("submit-btn");
const validationMessage = document.getElementById("validation-msg");

// // Add a click event listener to the submit button
// submitButton.addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the input value
//   const inputValue = inputElement.value.trim();

//   // Check if the input value is empty
//   if (inputValue === "") {
//     validationMessage.textContent = "Vacío";
//   } else {
//     validationMessage.textContent = "";
//     // Perform further actions or submit the form
//   }
// });

quantity.addEventListener("change", () => {
  const inputValue = inputElement.value.trim();
  if (inputValue === "") {
    validationMessage.textContent = "Vacío";
  } else {
    validationMessage.textContent = "";
    // Perform further actions or submit the form
  }
});
