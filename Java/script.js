document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Analytical Chemist", "Data Scientist", "Software Developer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const speed = 50; // typing speed in milliseconds
    const delay = 1000; // delay between typing and deleting
    const initialDelay = 2000; // initial delay before starting the typing effect

    function typeWriter() {
        const prefixElement = document.getElementById("typing-prefix");
        const textElement = document.getElementById("typing-text");

        if (texts[index].startsWith("A") || texts[index].startsWith("E") || texts[index].startsWith("I") || texts[index].startsWith("O") || texts[index].startsWith("U")) {
            prefixElement.innerHTML = "an ";
        } else {
            prefixElement.innerHTML = "a ";
        }

        if (isDeleting) {
            if (charIndex > 0) {
                currentText = texts[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, speed / 2);
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeWriter, speed);
            }
        } else {
            if (charIndex < texts[index].length) {
                currentText = texts[index].substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeWriter, speed);
            } else {
                isDeleting = true;
                setTimeout(typeWriter, delay);
            }
        }
        textElement.innerHTML = currentText;
    }

    setTimeout(typeWriter, initialDelay); // Start the typewriter effect after the initial delay

    // Function to load content from an external HTML file
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const contentElement = document.getElementById(elementId);
                contentElement.innerHTML += data;
                contentElement.querySelectorAll('.section').forEach(section => {
                    section.classList.add('visible');
                });
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load the About Me section when the user scrolls to the bottom of the home section
    const homeSection = document.getElementById('home');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadContent('../Pages/about_me.html', 'content');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeSection);
});