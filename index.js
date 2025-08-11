const nav = document.querySelector('.js_nav');
const hamburger = document.querySelector('.js_hamburger');
const first = document.querySelector('.js_first');
const mid = document.querySelector('.js_mid');
const last = document.querySelector('.js_last');

hamburger.addEventListener('click', () => {

    hamburger.classList.contains('active') ? hamburger.classList.toggle('active') : hamburger.classList.add('active');
    nav.classList.contains('active') ? nav.classList.toggle('active') : nav.classList.add('active');
    first.classList.contains('active') ? first.classList.toggle('active') : first.classList.add('active');
    mid.classList.contains('active') ? mid.classList.toggle('active') : mid.classList.add('active');
    last.classList.contains('active') ? last.classList.toggle('active') : last.classList.add('active');
})