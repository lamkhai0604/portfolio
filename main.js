let i = 0;
let txt = 'I am not entirely sure what you want to achieve, but I guess you want to display text on your webpage. You can do this like this';
let speed = 50;
const texts = ['Welcome my portfolio'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const hambuger = document.querySelector('.hambuger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')

hambuger.addEventListener('click', () => {
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
    setTimeout(type, 250)
}());