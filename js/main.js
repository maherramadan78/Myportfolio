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
