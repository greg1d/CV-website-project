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
                loadContent('about_me.html', 'content');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeSection);

    // Calculate and set the position of the cartoon image to the center height of the text box
    const textBox = document.querySelector('.text-box');
    const cartoonImage = document.querySelector('.cartoon-image');
    if (textBox && cartoonImage) {
        const contentHeight = textBox.scrollHeight; // Height of the content
        const paddingTop = parseFloat(window.getComputedStyle(textBox).paddingTop);
        const paddingBottom = parseFloat(window.getComputedStyle(textBox).paddingBottom);
        const borderTop = parseFloat(window.getComputedStyle(textBox).borderTopWidth);
        const borderBottom = parseFloat(window.getComputedStyle(textBox).borderBottomWidth);

        const totalHeight = contentHeight + paddingTop + paddingBottom + borderTop + borderBottom;
        const centerHeight = totalHeight / 2;

        console.log('Center height of the text box:', centerHeight);

        // Set the position of the cartoon image to the center height
        cartoonImage.style.position = 'relative';
        cartoonImage.style.top = `calc(50% - ${centerHeight}px)`;

        // Print the center height of the text box on the page
        const heightDisplay = document.createElement('div');
        heightDisplay.textContent = `Center height of the text box: ${centerHeight}px`;
        document.body.appendChild(heightDisplay);
    }
});