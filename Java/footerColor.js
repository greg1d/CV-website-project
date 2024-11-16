document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('footer');

    if (!footer) {
        console.error('Footer element not found');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const footerColor = entry.target.getAttribute('data-footer-color');
                console.log('data-footer-color:', footerColor); // Print the value of data-footer-color
                footer.style.backgroundColor = footerColor;
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});