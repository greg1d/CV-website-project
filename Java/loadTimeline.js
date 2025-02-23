document.addEventListener('DOMContentLoaded', function () {
    // Load About Me content
    fetch('/Pages/about_me.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for About Me');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('timeline-container').innerHTML = data;
            // Now that the About Me content is loaded, load the Research content
            return fetch('/Pages/Research.html');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for Research');
            }
            return response.text();
        })
        .then(researchData => {
            document.getElementById('research-container').innerHTML = researchData;
            // Optionally add the 'visible' class to sections in the research container
            document.querySelectorAll('#research-container .section').forEach(section => {
                section.classList.add('visible');
            });
            // Now load the Presentations content
            return fetch('/Pages/Presentations.html');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for Presentations');
            }
            return response.text();
        })
        .then(presentationsData => {
            document.getElementById('presentations-container').innerHTML = presentationsData;
        })
        .catch(error => console.error('Error loading content:', error));
});
