# Development History

## Iterative Development Summary

### 1. Initial Setup
- Hosted on GitHub Pages (`docs/` as publishing source)
- Content managed via Markdown: experiments, thoughts (formerly blogs), and about/profile
- Sample content created with YAML front matter

### 2. Automation & Content Listing
- Adopted Jekyll collections and Liquid templates for auto-listing experiments and thoughts
- Eliminated manual JSON files
- "Blog" renamed to "Thoughts" for a personal tone

### 3. Structure & Naming
- "projects" → "experiments" for clarity
- "profile" → "about" for consistency
- Documentation and README updated to reflect structure and naming

### 4. Deployment
- Initially set up GitHub Actions for builds, then reverted to classic GitHub Pages to save Actions minutes
- Ensured correct publishing source, CNAME, and DNS/HTTPS setup

### 5. Theme & Visuals
- User requested a modern, Google Labs-inspired look
- Chose and configured the Moonwalk theme (`chanstev/moonwalk` as remote theme)
- Navigation updated with social links; About page simplified and styled

### 6. Content Policy
- All placeholder/demo content clearly marked as AI-generated, both in content and documentation

### 7. Index & Listing Logic
- Experiments set as the landing page
- Index pages use Jekyll collections, exclude "Index" entries, and have clean headings/navigation

### 8. Documentation & Iteration Tracking
- Project context document updated with all major decisions
- Added `HISTORY.md` to track iterations and lessons learned

### 9. Troubleshooting
- Resolved Jekyll collection, Liquid syntax, and theme issues
- Removed obsolete/duplicate files and directories

## Key Principles
- Minimal maintenance via Jekyll automation
- Clear, modern design with Moonwalk theme
- Transparent content policy for AI-generated material
- Iterative, well-documented development with AI collaboration 