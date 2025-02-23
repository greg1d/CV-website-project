document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.querySelector('.text-box');
    const timelineEntries = document.querySelectorAll('.timeline .timeline-entry');

    if (!textBox || timelineEntries.length === 0) {
        console.error("Either text box or timeline entries not found.");
        return;
    }

    window.addEventListener('scroll', function () {
        let anyEntryVisible = false;
        timelineEntries.forEach(entry => {
            const rect = entry.getBoundingClientRect();
            // Check if any part of the timeline entry is within the viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                anyEntryVisible = true;
            }
        });

        console.log("Any timeline entry visible:", anyEntryVisible);

        if (anyEntryVisible) {
            // Show the text box
            textBox.classList.add('text-box-static');
            textBox.classList.remove('text-box-scroll');
        } else {
            // Hide the text box
            textBox.classList.add('text-box-scroll');
            textBox.classList.remove('text-box-static');
        }
    });
});
