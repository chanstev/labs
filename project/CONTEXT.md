# Project Context

## Overview
This project is a static website for labs.chansteven.com, focusing on a lightweight landing page hosted on GitHub Pages. The website showcases mini-experiments, a blog, and a profile page, with an emphasis on minimal maintenance.

## Note
This project is a personal experiment in AI-assisted development. It's not open source, but rather a demonstration of how AI can be used as a development partner. The project context document serves as the foundation for this collaboration, ensuring consistent understanding and decision-making throughout the development process.

## Documentation Structure

### README.md (For Human Repository Visitors)
- **Purpose**: Provide a high-level overview of the project for GitHub visitors
- **Audience**: Human developers and visitors to the repository
- **Content Focus**:
  - Brief project description
  - AI collaboration methodology
  - Top-level project structure
  - Getting started information
- **Style**: Concise, welcoming, and informative for first-time visitors

### CONTEXT.md (For Human-AI Collaboration)
- **Purpose**: Serve as the single source of truth for project development
- **Audience**: Primary collaboration space between human and AI
- **Content Focus**:
  - Detailed technical specifications
  - Implementation decisions and rationale
  - Project structure and organization
  - Maintenance procedures
  - Future development plans
- **Style**: Comprehensive, technical, and focused on development details

This separation ensures that:
1. Repository visitors get a clear, concise overview
2. Development decisions and details are properly documented
3. AI collaboration has a structured reference point
4. Project context remains separate from public documentation

## Technology Stack
- **Hosting**: GitHub Pages for static site hosting
- **Static Site Generator**: Jekyll for site generation and templating
- **Content Management**: Markdown files for all content
- **Deployment**: GitHub Actions for automated builds and deployments
- **Version Control**: Git for source control and collaboration

## GitHub Pages Configuration
- The website is configured to use the `docs/` directory as the publishing source for GitHub Pages.
- This is a requirement of GitHub Pages, which only allows publishing from either:
  1. The root directory (`/`) of a specific branch
  2. The `/docs` directory of a specific branch
- All website content must be placed in the `docs/` directory to be published.
- The project documentation and context are kept separate in the `project/` directory to maintain a clean separation between published content and project documentation.

## Project Structure
- `docs/`: Contains the main content of the website (GitHub Pages source).
  - `index.html`: The landing page.
  - `experiments/`: Directory for experiment Markdown files.
  - `thoughts/`: Directory for blog post Markdown files.
  - `profile/`: Directory for profile content.
  - `_layouts/`: Contains layout templates for different sections.
  - `assets/`: Contains CSS, JavaScript, and other static assets.
- `project/`: Contains project documentation and context.
  - `CONTEXT.md`: Project context document.

## Key Features
- **Experiments**: Showcases mini-experiments with detailed descriptions and links to external repositories
- **Thoughts**: A section for sharing personal insights and musings, organized by tags
- **Profile**: A professional introduction and details about the user
- **Automatic Listing**: Jekyll/Liquid templates for automatic content organization
- **Responsive Design**: Mobile-friendly layout and navigation
- **Minimal Maintenance**: Simple content updates through Markdown files

## Final Decisions

### Content Organization
- **Content Management**: All content is managed using Markdown files. This includes experiments, blog posts (now referred to as "thoughts"), and profile information.
- **Automatic Listing**: Jekyll/Liquid templates are used to automatically list experiments and thoughts, eliminating the need for separate JSON files like `blog.json` and `projects.json`.
- **Naming Conventions**: 
  - The "Blog" section has been renamed to "Thoughts" to reflect a more casual sharing of personal insights
  - The "Projects" section has been renamed to "Experiments" to better reflect their nature as mini lab experiments
  - The `project/` directory is kept separate from `docs/` to maintain a clean separation between published content and project documentation

### Structure and Maintenance
- **Directory Organization**: 
  - `docs/` serves as the GitHub Pages source directory
  - `project/` contains project documentation and context
  - All website content must be in `docs/` to be published
- **Maintenance**: The website is designed for minimal maintenance, with content updates made through Markdown files
- **Documentation**: 
  - Project context document serves as the single source of truth
  - README focuses on high-level overview and AI collaboration
  - Detailed documentation is maintained in the context document

### Development Approach
- **AI Collaboration**: The project itself is an experiment in AI-assisted development
- **Context-First**: Development decisions are documented in the project context document
- **Iterative Process**: The context document evolves through continuous dialogue between AI and human
- **Placeholder Content**: Sample experiments and thoughts are marked as dummy placeholders generated by AI

### Future Development
- Continue to add new experiments and thoughts as they are developed
- Explore additional features or improvements to enhance user experience
- Maintain the focus on minimal maintenance and clear documentation

## Maintenance
- Experiments and thoughts are maintained using Markdown files, simplifying content management and allowing for rich content directly in the files.
- The website is designed to be easily maintainable with minimal manual updates required.
- All content updates must be made in the `docs/` directory to ensure they are published to GitHub Pages.

## Future Plans
- Continue to add new experiments and thoughts as they are developed.
- Explore additional features or improvements to enhance user experience.
