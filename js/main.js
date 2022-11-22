/* eslint-disable linebreak-style */
document.querySelector('.menu-link').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

document.querySelector('.mobile-menu-close').addEventListener('click', (e) => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility: hidden');
  e.preventDefault();
});

document.querySelector('.mobile-menu-1').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

document.querySelector('.mobile-menu-2').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

document.querySelector('.mobile-menu-3').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

// Contact validation form
const email = document.querySelector('#email');
const form = document.querySelector('.contact-form');
const error = email.nextElementSibling;

const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const isValid = pattern.test(email.value);
  if (!isValid) {
    error.textContent = 'Please enter the email in lowercase.';
    event.preventDefault();
  } else {
    error.textContent = '';
  }
});
