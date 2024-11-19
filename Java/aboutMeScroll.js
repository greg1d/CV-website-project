document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.querySelector('.text-box');
    const aboutSection = document.getElementById('about');
    let isScrolled = false;

    window.addEventListener('scroll', function() {
        const textBoxRect = textBox.getBoundingClientRect();
        const textBoxTop = textBoxRect.top;
        const aboutSectionRect = aboutSection.getBoundingClientRect();

        console.log('textBoxTop:', textBoxTop);
        console.log('About me section detected', aboutSectionRect.top);

        if (textBoxTop <= window.innerHeight * 0.2 && !isScrolled) { // 80% off the screen
            console.log('Switching to scroll position');
            textBox.classList.add('text-box-scroll');
            textBox.classList.remove('text-box-static');
            isScrolled = true;
        } else if (aboutSectionRect.top >= 0 && isScrolled) {
            console.log('Switching to static position');
            textBox.classList.add('text-box-static');
            textBox.classList.remove('text-box-scroll');
            isScrolled = false;
        }
    });
});