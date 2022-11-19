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
const form = document.getElementById('form');
const mailValue = document.getElementById('email').value;
const errorMessage = document.getElementById('error');
form.addEventListener('submit', (e) => {
  console.log(mailValue);
e.preventDefault();
const showMessage = [];
if (mailValue.value.toLowerCase() !== mailValue.value) {
errorMessage.style.display = 'inline-block';
showMessage.push(`Error: Email should be in lowercase,  you entered ${mailValue.value}`);
} else {
  form.submit();
}
errorMessage.innerText = showMessage;
});