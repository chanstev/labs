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

## Lessons Learned
### Jekyll Collections
1. Collection Configuration
   - Always define collections in `_config.yml` with proper settings
   - Use underscore prefix for collection directories
   - Set correct output and permalink patterns
   - Configure default front matter

2. Directory Structure
   - Collection content must be in correct directories (e.g., `_experiments/`)
   - Create collection directories before adding content
   - Follow Jekyll's naming conventions strictly

3. Template Safety
   - Always check for collection existence before operations
   - Include null checks in Liquid templates to prevent build errors if the collection is empty or missing
   - Provide fallback content for empty collections

4. Documentation
   - Document collection structure and requirements
   - Keep technical notes up to date
   - Record troubleshooting steps for future reference

### Hugo Setup Attempts
#### 2025-05-04: Hugo Migration Attempt

### Initial Setup
- Started with Jekyll configuration
- Switched to Hugo with Quint theme
- Encountered issues with theme installation

### Theme Issues
1. Quint theme installation failed due to:
   - SSH authentication issues
   - Complex theme setup
   - Configuration syntax errors

2. Switched to PaperMod theme:
   - Built-in theme
   - Multiple TOML syntax errors
   - Complex configuration structure

3. Finally switched to Ananke theme:
   - Built-in theme
   - Simpler configuration
   - Still facing TOML syntax issues

### Configuration Issues
1. Common TOML syntax errors:
   - Incorrect nesting of tables
   - Improper array syntax
   - Incorrect key-value pair formatting

2. Specific issues encountered:
   - Goldmark markup configuration syntax
   - Theme-specific configuration structures
   - Build directory configuration

### Lessons Learned
1. Start with simpler themes
2. Verify TOML syntax carefully
3. Use built-in themes when possible
4. Document configuration changes
5. Test locally before pushing

### Next Steps
1. Clean up current configuration
2. Start fresh with a simpler setup
3. Document all configuration changes
4. Verify each step before proceeding
   - Record troubleshooting steps for future reference 