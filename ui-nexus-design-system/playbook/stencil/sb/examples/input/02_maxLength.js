const inputField = document.getElementById('nxsInput');
const inputFixedLengthForm=document.getElementById('nxsForm');
let messageElement = document.getElementById('nxsMessage');
var maxLength=20;
document.getElementById('nxsInput').addEventListener('input', () => {
  if (event.target.value.length >= maxLength) {
      const errorMessageElement = document.createElement('nexus-error-message');
      errorMessageElement.textContent = 'You Have Reached ' + maxLength + ' characters';
      inputFixedLengthForm.replaceChild(errorMessageElement, messageElement);
      messageElement = errorMessageElement;
      messageElement.style.display = 'block';
      event.preventDefault();
  } else {
      messageElement.style.display = 'none';
  }
});


