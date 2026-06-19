# Local Development Guide

## Prerequisites (one-time setup)

### 1. Install Docker

```bash
sudo apt-get update && sudo apt-get install -y docker.io docker-compose-v2
sudo systemctl enable --now docker
```

### 2. Add yourself to the docker group

```bash
sudo usermod -aG docker $USER
newgrp docker   # apply immediately in the current shell
```

> After this you never need `sudo` with docker commands again.

---

## Start the dev server

```bash
docker compose up
```

Site is live at **http://localhost:8080** with live-reload on file changes.

> The Docker image is cached locally after the first `--build`. Subsequent
> `docker compose up` calls reuse the cache and start in seconds.

---

## Common commands

| Task                                 | Command                                            |
| ------------------------------------ | -------------------------------------------------- |
| Start (use cached image)             | `docker compose up`                                |
| Start in background                  | `docker compose up -d`                             |
| Stop                                 | `docker compose down`                              |
| View logs (if running in background) | `docker compose logs -f`                           |
| First-time or after Gemfile changes  | `docker compose up --build`                        |
| Pull latest upstream image           | `docker compose pull && docker compose up --build` |

---

## Troubleshooting

**Permission denied on `/var/run/docker.sock`**

```bash
sudo usermod -aG docker $USER && newgrp docker
```

**Gems not found / `Bundler::GemNotFound`**

The prebuilt hub image may be outdated. Rebuild locally:

```bash
docker compose up --build
```

**Permission denied on `.jekyll-cache`**

Uncomment the `build: args:` block in `docker-compose.yml` and fill in:

```bash
id -g        # GROUPID
id -gn       # GROUPNAME
id -u        # USERID
echo $USER   # USERNAME
```

**Port 8080 already in use**

```bash
docker compose down
# or kill the process holding the port:
lsof -ti :8080 | xargs kill
```
