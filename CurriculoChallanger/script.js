
const menuToggle = document.querySelector('.menu-toggle');
const navegacao = document.querySelector('.navegacao');

menuToggle.addEventListener('click', () => {
    navegacao.classList.toggle('active');
});