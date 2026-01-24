# Personal Splash Page

This repo contains my personal website, [kabirkuryian.com](https://kabirkuriyan.com).

A simple, elegant React profile page built with Vite, featuring automatic deployment to GitHub Pages.

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 💫 Deployment

### Automatic Deployment with GitHub Actions

This project uses GitHub Actions to automatically build and deploy to GitHub Pages on every push to the `main` branch.

**How it works:**

1. The workflow builds the Vite project
2. Pushes the built files to the `gh-pages` branch
3. GitHub Pages serves the site from the `gh-pages` branch

**Repository Settings:**

1. Go to your repository **Settings → Pages**
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "gh-pages" and "/ (root)"
3. Your site will be live at `https://kabirkuriyan.com` (or `https://[username].github.io/[repo-name]`)

The workflow runs automatically and includes:
- Building the Vite project
- Deploying to the `gh-pages` branch

### Pull Request Automation

Every pull request automatically runs:
- Dependency installation
- Linting checks
- Build verification
- Output validation

This ensures all changes are tested before merging to `main`.

## 🔮 Code Quality

ESLint, Prettier, and Stylelint are configured for code quality:

```bash
npm run lint
```

To automatically format all code files:

```bash
npm run format
npm run format:css
```

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/     # GitHub Actions CI/CD workflows
├── src/
│   ├── App.jsx       # Main React component
│   ├── main.jsx      # App entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Hosting

## 📝 Workflows

### CI Workflow (`ci.yml`)
Runs on every pull request:
- Installs dependencies
- Runs linting
- Builds the project
- Validates build output

### Deploy Workflow (`deploy.yml`)
Runs on every push to `main`:
- Builds the project
- Deploys to GitHub Pages

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Open a pull request (CI will run automatically)
4. Once approved and merged, deployment happens automatically

## Inspiration

Some code taken from https://github.com/kremalicious/portfolio, particularly the linter config.  

