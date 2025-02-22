document.addEventListener('DOMContentLoaded', function () {
    const texts = ["an Analytical Chemist", "a Data Scientist", "a Software Developer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const baseSpeed = 50; // base typing speed in milliseconds
    const delay = 1000; // delay between typing and deleting
    const initialDelay = 2000; // initial delay before starting the typing effect

    function getRandomSpeed() {
        return baseSpeed + Math.random() * 100; // random speed between baseSpeed and baseSpeed + 100
    }

    function typeWriter() {
        const textElement = document.getElementById("typing-text");

        currentText = texts[index].substring(0, charIndex);

        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeWriter, baseSpeed / 0.5); // Fixed speed for deleting
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeWriter, baseSpeed);
            }
        } else {
            if (charIndex < texts[index].length) {
                charIndex++;
                setTimeout(typeWriter, getRandomSpeed()); // Random speed for typing
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
                loadContent('../Pages/Research.html', 'content');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeSection);
});
