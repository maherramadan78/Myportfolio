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


const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-hint');
// form.addEventListener('submit', (e) => {
//   console.log(e.target)
//   if(email.value === email.value.toLowerCase()) {
// form.submit()
// } else { form
//     e.preventDefault();
//     console.log('invalid submission')
// error.innerHTML = 'Email should be in lower case'
// }
// }) 