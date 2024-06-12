const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile');
const langBtn = document.querySelector('.lang');
const langText = document.querySelector('.lang > p');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

langBtn.addEventListener('click', () => {
  langText.innerHTML == 'RU' ? langText.innerHTML = 'EN' : langText.innerHTML = 'RU';
});