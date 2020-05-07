let i = 0;
let txt = 'Nowadays information technology is growing faster than ever with the needs of humans in a developing world. Therefore, it acquired people to learn and self-improve to catch the flow of the century. With enthusiasm and interest in technology, I believe full-stack web development is a new challenge that I would love to take';
let speed = 50;
const texts = ['If you are interested in my profile don\'t hesitate to leave me a message or contact me directly via...'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 100)
}());