# Project Context

## Overview
Steven's Lab is a static website for labs.chansteven.com, focusing on a lightweight landing page hosted on GitHub Pages. The website showcases mini-experiments, a thoughts section, and an about page, with an emphasis on minimal maintenance and AI collaboration.

## Theme and Visual Design
- The site uses the Quint Hugo theme for a modern, clean, and visually appealing look.

## Documentation Structure
- **README.md**: High-level overview for human visitors (project summary, structure, getting started)
- **CONTEXT.md**: Source of truth for project development, technical decisions, and collaboration notes
- **SETUP.md**: Steps for GitHub Pages and custom domain setup
- **HISTORY.md**: Iteration history, major decisions, and lessons learned

## Technology Stack
- **Hosting**: GitHub Pages
- **Static Site Generator**: Hugo
- **Theme**: Quint
- **Content**: Markdown files for all content
- **Styling**: Theme-provided CSS

## Project Structure
- `content/`: Website content
  - `posts/`: Blog posts and experiments
  - `about/`: About page
  - `index.md`: Landing page
- `themes/`: Hugo themes directory
  - `quint/`: Quint theme
- `static/`: Static assets
- `config.toml`: Hugo configuration
- `project/`: Project documentation and context

## Key Features
- **Experiments**: Mini-experiments with descriptions and links
- **Thoughts**: Personal insights and musings, organized by tags
- **About**: Professional introduction and background
- **Automatic Listing**: Jekyll/Liquid templates for content organization
- **Responsive Design**: Mobile-friendly, accessible, and visually clear
- **Minimal Maintenance**: Content updates via Markdown

## Recent Updates
- Site name standardized as "Steven's Lab"
- Profile section renamed to About
- Improved color theme and navigation for clarity and accessibility
- Copyright updated

## Maintenance
- All content is managed via Markdown in the `docs/` directory
- Minimal manual updates required
- Project context and setup are documented in the `project/` directory

## Content Policy
- All generated placeholder content (such as experiments, thoughts, and about) must be clearly indicated as AI-generated placeholder content for demo purposes only. This ensures transparency and avoids confusion with real or production content.

## UI/UX and Content Requirements
- The Experiments page serves as the landing page (root of the site).
- Social links (GitHub, LinkedIn) are displayed in the top right of the navigation bar.
- The About page is brief, visually consistent with the rest of the site, and not a public CV.
- Navigation and URLs use the names: Experiments, Thoughts, About.
- All placeholder/demo content is clearly marked as AI-generated.

## Technical Notes
### Jekyll Collections
- Collections must be properly defined in `_config.yml` with:
  - Correct directory names (prefixed with underscore)
  - Output settings
  - Permalink patterns
  - Default front matter
- Collection content must be in the correct directory (e.g., `_experiments/`, `_thoughts/`)
- Templates should include null checks when accessing collections to prevent Liquid errors if the collection is empty or missing.
- Collection directories must exist before adding content
