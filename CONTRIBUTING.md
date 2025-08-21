# Contributing to Your Presentation

## Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Quarto** (if not already installed)
   - Visit [quarto.org](https://quarto.org/docs/get-started/) for installation instructions

3. **Edit your presentation**
   - Modify `template.qmd` with your content
   - Preview locally: `quarto preview template.qmd`
   - Render locally: `quarto render template.qmd`

## Customization Guide

### Basic Content
- Update the YAML frontmatter with your details
- Add slides using `##` for main sections and `###` for subsections
- Use standard Markdown syntax for content

### Theme Customization
- Modify colors in `_extensions/clean/clean.scss`
- Adjust the `$accent` and `$accent2` variables for your brand colors
- Customize fonts by updating the Google Fonts import

### Advanced Features
- Add code blocks with syntax highlighting
- Include images: `![Alt text](image.png)`
- Create columns: Use RevealJS column syntax
- Add animations: Use RevealJS fragment classes

## Deployment

The presentation automatically deploys to GitHub Pages when you push to the main branch. The workflow:

1. Triggers on push to main
2. Sets up Quarto environment
3. Renders the presentation
4. Deploys to GitHub Pages

## Troubleshooting

### Workflow Fails
- Check that GitHub Pages is enabled in repository settings
- Ensure the workflow has proper permissions
- Check the Actions tab for detailed error logs

### Local Issues
- Verify Quarto is installed correctly
- Check that all image paths are correct
- Ensure YAML frontmatter is valid

## Getting Help

- [Quarto Documentation](https://quarto.org/docs/)
- [RevealJS Features](https://quarto.org/docs/presentations/revealjs/)
- [GitHub Pages Setup](https://docs.github.com/en/pages)