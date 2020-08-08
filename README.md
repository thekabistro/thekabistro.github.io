# Personal Splash Page

This repo contains my personal website, [kabirkuryian.com](https://kabirkuriyan.com).  

Create content by placing markdown files under a /content/ top level directory.  Gatsby will read these and automatically generate pages for each.  Each directory under content will be a top level navigation bar category, with dropdowns for the files under it. 

### Quickstart

```
docker-compose up -d
```

```
docker exec gatsby-dev [command]
```

### 💫 Deploy

This will deploy to github pages.  Note: change the CNAME in /public/CNAME to reflect custom domains.

```
npm run deploy
```

### 🔮 Linting

ESlint, Prettier, and Stylelint are setup for all linting purposes:

```bash
npm run lint
```

To automatically format all code files:

```bash
npm run format
npm run format:css
```


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── content
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── Dockerfile
    ├── docker-compose.yml
    └── README.md

### Code Structure

src/.
    ├── components
    ├── pages
    ├── templates

Each page has an associated .css file, if needed. Most pages are based off the layout.js file.  

### Inspiration 

Some code taken from https://github.com/kremalicious/portfolio, particularly the linter config.  

