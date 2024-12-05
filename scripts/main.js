document.addEventListener('DOMContentLoaded', function () {
    // Function to load components
    function loadComponent(component) {
        const container = document.querySelector(`#${component}`);
        fetch(`components/${component}.html`)
            .then((response) => response.text())
            .then((html) => {
                const temp = document.createElement('template');
                temp.innerHTML = html;
                container.replaceWith(temp.content);
            })
            .catch((error) => {
                console.error(`Error loading component ${component}:`, error);
                container.innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';
            });
    }

    // Function to load sections
    function loadSection(section) {
        const container = document.querySelector(`#${section}`);
        fetch(`components/sections/${section}.html`)
            .then((response) => response.text())
            .then((html) => {
                const temp = document.createElement('template');
                temp.innerHTML = html;
                container.replaceWith(temp.content);
            })
            .catch((error) => {
                console.error(`Error loading section ${section}:`, error);
                container.innerHTML = '<p>Sorry, an error occurred while loading the content.</p>';
            });
    }

    const components = ['header', 'footer'];
    const sections = ['banner', 'about', 'service', 'partner', 'reports', 'news'];

    components.forEach(component => {
        loadComponent(component);
    });

    sections.forEach(section => {
        loadSection(section);
    });
});