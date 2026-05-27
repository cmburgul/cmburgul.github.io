# Running the Portfolio Locally with Docker

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running
- Git

---

## First-Time Setup

### 1. Clone the repository

```bash
git clone https://github.com/cmburgul/cmburgul.github.io.git
cd cmburgul.github.io
```

### 2. Generate `Gemfile.lock`

This is only needed once, or whenever you change the `Gemfile`.

```bash
docker run --rm \
  -v $(pwd):/srv/jekyll \
  -w /srv/jekyll \
  ruby:slim \
  bash -c "apt-get update -qq && \
           apt-get install -y --no-install-recommends build-essential git nodejs && \
           gem install bundler && \
           bundle lock"
```

### 3. Build the Docker image

```bash
docker build -t al-folio-local .
```

This installs Ruby, Jekyll, and all gem dependencies. Takes ~3–5 minutes the first time. Subsequent builds are cached and fast.

---

## Starting the Server

```bash
docker compose up
```

Then open your browser and go to:

```
http://localhost:8080
```

The site supports **live reload** — edits to files are reflected in the browser automatically without restarting the container.

To stop the server:

```bash
docker compose down
```

---

## Updating Your Content

| What to change | Where |
|---|---|
| Bio / About page | `_pages/about.md` |
| Profile picture | `assets/img/prof_pic.jpg` (replace with your photo) |
| Resume / CV | `assets/pdf/Resume.pdf` (replace with your file) |
| Projects | `_projects/` — one `.md` file per project |
| Social links (GitHub, LinkedIn, email) | `_data/socials.yml` |
| Site title, name, description | `_config.yml` |

### Adding a new project

Create a new file in `_projects/`, e.g. `_projects/3_my_project.md`:

```markdown
---
layout: page
title: My New Project
description: Short description shown on the projects card.
img: assets/img/my_image.png
importance: 3
category: research
---

Write your project details here using Markdown.
```

Drop the project image in `assets/img/` and reference it in the front matter.

---

## Rebuilding the Image

Only needed if you modify the `Gemfile` (add/remove gems):

```bash
# Regenerate lock file
docker run --rm \
  -v $(pwd):/srv/jekyll \
  -w /srv/jekyll \
  ruby:slim \
  bash -c "apt-get update -qq && \
           apt-get install -y --no-install-recommends build-essential git nodejs && \
           gem install bundler && \
           bundle lock"

# Rebuild image
docker build -t al-folio-local .
```

---

## Deploying to GitHub Pages

Push your changes to the `master` branch:

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

GitHub Actions will automatically build and deploy the site to `https://cmburgul.github.io`.

> **Note:** The first deploy after switching to al-folio may take a few minutes to propagate.
