const menu = document.querySelector('.overlay');

const openBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mm-close-btn');

menu?.addEventListener('click', e => {
  if (e.target.closest('.mm-item')) toggleClasses();
});

openBtn?.addEventListener('click', toggleClasses);
closeBtn?.addEventListener('click', toggleClasses);

function toggleClasses() {
  menu?.classList.toggle('is-hidden');
  document.body.classList.toggle('menu-is-opened');
}
