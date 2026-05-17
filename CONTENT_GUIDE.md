# Content Guide — Where to Change What

## About / Homepage

**File:** `_pages/about.md`

| Section | Where in the file |
|---|---|
| Subtitle (e.g. "Robotics Engineer") | `subtitle:` in the front matter (top) |
| Email shown under photo | `more_info:` block in front matter |
| Location shown under photo | `more_info:` block in front matter |
| Bio paragraph | Text below the `---` at the bottom |
| Research interests bullet list | Bullet list at the very bottom |

---

## Profile Picture

**File:** `assets/img/prof_pic.jpg`

Replace this file with your new photo. Keep the filename exactly as `prof_pic.jpg`.
The image is displayed on the About page automatically.

---

## Resume / CV

**File:** `assets/pdf/Resume.pdf`

Replace this file with your updated resume. Keep the filename exactly as `Resume.pdf`.
The CV link in the footer/social icons points to this file.

---

## Projects

Each project is its own file in `_projects/`.

| Project | File |
|---|---|
| Within Hand Manipulation | `_projects/1_within_hand_manipulation.md` |
| Multi-Goal RL / Legged Robot | `_projects/2_multi_goal_rl_puck_pushing.md` |

### What to edit in each project file

```
---
title:        ← Project name shown on the card and page
description:  ← Short text shown on the project card
img:          ← Image shown on the card (put file in assets/img/)
importance:   ← Sort order (1 = first, 2 = second, etc.)
category:     ← Must be "research" to show up on the projects page
---

Everything below the --- is the full project page content (Markdown).
```

### Adding a new project

Create a new file, e.g. `_projects/3_my_new_project.md`:

```markdown
---
layout: page
title: My New Project
description: One sentence shown on the project card.
img: assets/img/my_image.png
importance: 3
category: research
---

Write your project description here in Markdown.
```

Drop the image in `assets/img/` and reference it in the `img:` field.

---

## Social Links (GitHub, LinkedIn, Email, CV)

**File:** `_data/socials.yml`

| Field | What it controls |
|---|---|
| `email:` | Email icon link |
| `github_username:` | GitHub icon link |
| `linkedin_username:` | LinkedIn icon link |
| `cv_pdf:` | CV / Resume download link |

---

## Site Title, Name, Description

**File:** `_config.yml`

| Field | What it controls |
|---|---|
| `first_name:` / `last_name:` | Your name in the navbar and title |
| `description:` | Meta description (SEO) |
| `url:` | Your live GitHub Pages URL |

> **Note:** After editing `_config.yml`, the Jekyll server must be restarted (it does not live-reload on config changes). Stop with `Ctrl+C` then run `docker compose up` again.

---

## Adding Project Images

1. Put your image in `assets/img/`
2. Reference it in the project front matter: `img: assets/img/your_file.png`

Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`
