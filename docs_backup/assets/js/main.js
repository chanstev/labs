// Project card template
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-icon">
                <i class="${project.icon || 'fas fa-code'}"></i>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.external_url}" class="project-link" target="_blank">View Project</a>
        </div>
    `;
}

// Load projects from projects.json
async function loadProjects() {
    try {
        const response = await fetch('/projects/projects.json');
        const projects = await response.json();
        const projectGrid = document.querySelector('.project-grid');
        
        if (projectGrid) {
            projectGrid.innerHTML = projects
                .map(project => createProjectCard(project))
                .join('');
        }
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 