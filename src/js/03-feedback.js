import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(function(event) {
    if (event.target === emailInput) {
        savedData.email = emailInput.value;
    } else if (event.target === messageInput) {
        savedData.message = messageInput.value;
    }
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
  }, 500));

 function setFormValues() {
  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
};

setFormValues();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`email: ${savedData.email}, message: ${savedData.message}`);
  
    form.reset()
    localStorage.removeItem('feedback-form-state');

});
