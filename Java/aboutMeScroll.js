document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.querySelector('.text-box');
    const aboutSection = document.getElementById('about');

    window.addEventListener('scroll', function() {
        const textBoxRect = textBox.getBoundingClientRect();
        const textBoxHeight = textBoxRect.height;
        const textBoxTop = textBoxRect.top;
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        if (textBoxTop <= window.innerHeight / 2 - textBoxHeight / 2) {
            textBox.classList.add('fixed');
        } else if (aboutSectionTop > 0) {
            textBox.classList.remove('fixed');
        }
    });
});