const nav = document.querySelector('.js_nav');
const hamburger = document.querySelector('.js_hamburger');
const first = document.querySelector('.js_first');
const mid = document.querySelector('.js_mid');
const last = document.querySelector('.js_last');
const navLinks = Object.values(document.getElementsByTagName('a'));

// const navL = 
console.log(typeof(navLinks))

// Function for toggling the navlinks
navLinks.forEach((button) => {
    button.addEventListener('click', () => {
        //had to change it to activ instead of active cause active is already performing a function.
            if (button.classList.contains('activ')) {
                button.classList.remove('activ');
            }
             else {
                turnOffPreviousButton();
                button.classList.add('activ');
             }
        }
    )
})

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.active');
    if (previousButton) {
        previousButton.classList.remove('active');
    }
}


hamburger.addEventListener('click', () => {

    hamburger.classList.contains('active') ? hamburger.classList.toggle('active') : hamburger.classList.add('active');
    nav.classList.contains('active') ? nav.classList.toggle('active') : nav.classList.add('active');
    first.classList.contains('active') ? first.classList.toggle('active') : first.classList.add('active');
    mid.classList.contains('active') ? mid.classList.toggle('active') : mid.classList.add('active');
    last.classList.contains('active') ? last.classList.toggle('active') : last.classList.add('active');
})