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
        document.getElementById("typing-text").innerHTML = currentText;
    }

    setTimeout(typeWriter, initialDelay); // Start the typewriter effect after the initial delay

    // Function to load content from an external HTML file
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load the About Me section
    loadContent('about_me.html', 'content');
});