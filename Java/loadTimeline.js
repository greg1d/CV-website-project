document.addEventListener('DOMContentLoaded', function () {
    // Load About Me content
    fetch('../Pages/about_me.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for About Me');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('timeline-container').innerHTML = data;
            // Now that the About Me content is loaded, load the Research content
            return fetch('../Pages/Research.html');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok for Research');
            }
            return response.text();
        })
        .then(researchData => {
            // Ensure you have a container for the research page in your HTML, e.g. <div id="research-container"></div>
            document.getElementById('research-container').innerHTML = researchData;
            // Optionally, if your research content contains .section elements, add the 'visible' class:
            document.querySelectorAll('#research-container .section').forEach(section => {
                section.classList.add('visible');
            });
        })
        .catch(error => console.error('Error loading content:', error));
});
