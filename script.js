document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello, I'm Greg, an Analytical Chemist";
    let index = 0;
    const speed = 100; // typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let menuTimeout;

function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        clearTimeout(menuTimeout);
    }
}

document.querySelector('.menu-container').addEventListener('mouseenter', () => {
    clearTimeout(menuTimeout);
});

document.querySelector('.menu-container').addEventListener('mouseleave', () => {
    menuTimeout = setTimeout(() => {
        document.getElementById('dropdown-menu').style.display = 'none';
    }, 5000);
});

document.getElementById('dropdown-menu').addEventListener('mouseenter', () => {
    clearTimeout(menuTimeout);
});

document.getElementById('dropdown-menu').addEventListener('mouseleave', () => {
    menuTimeout = setTimeout(() => {
        document.getElementById('dropdown-menu').style.display = 'none';
    }, 5000);
});