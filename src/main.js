const menu = document.querySelector('.overlay');

const openBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mm-close-btn');

openBtn?.addEventListener('click', toggleClasses);
closeBtn?.addEventListener('click', toggleClasses);

function toggleClasses() {
  menu?.classList.toggle('is-hidden');
  document.body.classList.toggle('menu-is-opened');
}
