const toggle = document.querySelector('.lines');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click',  toggleMenu);

function toggleMenu(){
    menu.classList.toggle('open');
}