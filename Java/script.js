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
                setTimeout(typeWriter, getRandomSpeed());
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

    // Load the About Me and Research sections when the user scrolls to the bottom of the home section
    const homeSection = document.getElementById('home');
    const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadContent('../Pages/about_me.html', 'content');
                loadContent('../Pages/Research.html', 'content');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    scrollObserver.observe(homeSection);

    // Toggle the display of the text box based on the visibility of the research container
    const researchContainer = document.getElementById('research-container');
    const textBox = document.querySelector('.text-box-static');

    const toggleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hide the text box when the research container is in view
                textBox.style.display = 'none';
            } else {
                // Show the text box when the research container is not in view
                textBox.style.display = 'block';
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    if (researchContainer) {
        toggleObserver.observe(researchContainer);
    }
});
