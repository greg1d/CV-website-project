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

    // Intersection Observer for section visibility
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll and resize event listeners
    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

    function setScrollVar() {
        const htmlElement = document.documentElement;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
        htmlElement.style.setProperty(
            "--scroll",
            Math.min(percentOfScreenHeightScrolled * 100, 100)
        );
    }

    setScrollVar();

    // Intersection Observer for images
    const imgObserver = new IntersectionObserver(entries => {
        for (let i = entries.length - 1; i >= 0; i--) {
            const entry = entries[i];
            if (entry.isIntersecting) {
                document.querySelectorAll("[data-img]").forEach(img => {
                    img.classList.remove("show");
                });
                const img = document.querySelector(entry.target.dataset.imgToShow);
                img?.classList.add("show");
                break;
            }
        }
    });

    document.querySelectorAll("[data-img-to-show]").forEach(section => {
        imgObserver.observe(section);
    });
});