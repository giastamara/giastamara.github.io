// Hamb
const navbar = document.querySelector('.navbar');
const hamb = document.querySelector('.hamb');

hamb.addEventListener('click', function() {
    navbar.classList.toggle('active')
    hamb.classList.toggle('active')
});

// Navbar Freeze
window.addEventListener('scroll', function() {
    const navigation = document.querySelector('nav');
    navigation.classList.toggle('freeze', window.scrollY > 0);
})

// Mode
const mode = document.querySelector('.mode');
const body = document.querySelector('body')

mode.addEventListener('click', function() {
    mode.classList.toggle('change')
    body.classList.toggle('change')
});