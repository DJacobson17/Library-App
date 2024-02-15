const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const inputs = [name, email, country, zip, password, confirmPassword];


inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input === confirmPassword && input.value !== password.value) {
      input.setCustomValidity('Passwords do not match');
      input.nextElementSibling.textContent = 'Passwords do not match';
      input.nextElementSibling.className = 'error';
    
  } else if (input.validity.valid || (input === confirmPassword)){
      input.setCustomValidity('');
      input.nextElementSibling.textContent = '';
      input.nextElementSibling.className = 'error';
    } else {
      showError(input);
    } 
  });
});

form.addEventListener('submit', e => {
  const errorCount = 0;
  inputs.forEach(input => {
    if (!input.validity.valid || (input === confirmPassword && input.value !== password.value)) {
      showError(input);
      e.preventDefault();
      errorCount++;
    }
  });
  if (errorCount === 0) {
    alert('Form submitted successfully');
  }
});

function showError(input) {
  switch (input.id) {
    case 'name':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Name cannot be empty';
      } else if (input.validity.tooShort) {
        input.nextElementSibling.textContent = `Name should be at least ${input.minLength} characters; you entered ${input.value.length}`;
      }
      break;

            // Add code for email validation here

    case 'email':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Email cannot be empty';
      } else if (input.validity.typeMismatch) {
        input.nextElementSibling.textContent = 'Invalid email format';
      }
      break;

    // Add cases for other input fields here
    case 'country':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Country cannot be empty';
      } else if (input.validity.tooShort) {
        input.nextElementSibling.textContent = `Country should be at least ${input.minLength} characters; you entered ${input.value.length}`;
      }
      break;

    case 'zip':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Zip cannot be empty';
      } else if (input.validity.patternMismatch) {
        input.nextElementSibling.textContent = `Zip should be in the format NNNNN or NNNNN-NNNN`;
      }
      break;

    case 'password':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Password cannot be empty';
      } else if (input.validity.tooShort) {
        input.nextElementSibling.textContent = `Password should be at least ${input.minLength} characters; you entered ${input.value.length}`;
      }
      break;

    case 'confirm-password':
      if (input.validity.valueMissing) {
        input.nextElementSibling.textContent = 'Confirm Password cannot be empty';
      } else if (input.value !== password.value) {
        input.nextElementSibling.textContent = 'Passwords do not match';
      }
      break;
  }
  
}
