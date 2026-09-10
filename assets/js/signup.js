/**
 * Get the p element that will display the error message
 * @param {HTMLInputElement} input
 * @returns {HTMLParagraphElement}
 */
function getMessageNode(input) {
  const id = input.getAttribute('aria-describedby')
  return document.getElementById(id);
}

/**
 * Display the validity message
 * @param {HTMLInputElement} input 
 */
function showMessage(input){
  const msgNode = getMessageNode(input);
  if (!input.validity.valid) {
    msgNode.textContent = input.validationMessage;
    input.setAttribute('aria-invalid', 'true');
  } else {
    msgNode.textContent = '';
    input.removeAttribute('aria-invalid');
  }
}

function validatePasswords() {
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('passwordConfirm');
  passwordInput.setCustomValidity('');
  passwordConfirmInput.setCustomValidity('');

  if (!passwordInput.value || !passwordConfirmInput.value) return;

  if (passwordInput.value !== passwordConfirmInput.value) {
    const msg = 'Password and Confirm Password do not match';
    passwordInput.setCustomValidity(msg);
    passwordConfirmInput.setCustomValidity(msg);
  }
}

/**
 * Generic input handler
 * @param {Event} ev 
 */
function onInput(ev) {
  const target = ev.target;
  if (!(target instanceof HTMLInputElement)) return;

  showMessage(target);

  if (target.id === 'password' || target.id === 'passwordConfirm') {
    validatePasswords();
    showMessage(document.getElementById('password'));
    showMessage(document.getElementById('passwordConfirm'));
  }
}

/**
 * Form submit handler
 * @param {Event} ev
 */
function onSubmit(ev){
  const form =  ev.target;
  if (!form.checkValidity()) {
    ev.preventDefault();
    form.querySelectorAll('input').forEach(showMessage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  form.addEventListener('input', onInput);
  form.addEventListener('submit', onSubmit);
});