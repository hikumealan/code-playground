const trigger = document.getElementById('trigger1');
const menu = document.getElementById('menu1');

trigger.addEventListener('click', () => {
  menu.setAttribute('open', true);
});

menu.addEventListener('closeEvent', () => {
  menu.setAttribute('open', false);
});

