# 🚀 Starter CMS (Strapi-Based)

A lightweight Strapi CMS starter, configured for local development and VPS deployment with Docker and GitHub Actions.

---

## 📦 Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/GuidaGG/cms-basic.git
cd cms-basic
npm install
```

### 2. Create Environment File

Copy the `.env.example` to `.env` and generate keys:

```bash
# App keys
node -e "console.log('APP_KEYS=' + Array(4).fill(0).map(() => require('crypto').randomBytes(32).toString('base64')).join(','))"

# Other secrets
node -e "console.log('API_TOKEN_SALT=' + require('crypto').randomBytes(16).toString('hex'))"
node -e "console.log('ADMIN_JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
```

Add them to your `.env` file accordingly.

---

## 🛠️ Local Development

Start the development server:

```bash
npm run dev
# or
npm run develop
```

Once running, go to [http://localhost:1337/admin](http://localhost:1337/admin) to create your first admin user.

### Available Scripts

- `npm run dev` / `develop` — Start Strapi with auto-reload
- `start` — Run in production mode
- `build` — Build the admin panel

---

## 🚀 VPS Deployment (Docker + GitHub Actions)

### 1. Upload Code to a New Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main --force
```

### 2. Prepare Your VPS

SSH into your VPS and set up the required folders:

```bash
ssh root@YOUR_VPS_IP
mkdir -p /home/<USER>/<PROJECT_NAME>/strapi-{uploads,db}
```

### 3. Install Docker

Follow the [official Docker installation guide for Ubuntu](https://docs.docker.com/engine/install/ubuntu/).

### 4. Configure Docker Volumes and Names

Update your `docker-compose.yml` file with the correct volume paths:

```yaml
volumes:
  - /home/root/cms-base/strapi-uploads:/app/public/uploads
  - /home/root/cms-base/strapi-db:/app/.tmp/database
```
Update your `deploy-strapi.yml` file with the correct volume paths and names

```yaml
      - name: Build Docker image
        run: docker build -t strapi-app-name .

      - name: Save Docker image to tarball
        run: docker save strapi-app-name -o strapi-app-name.tar
      (...)
```

### 5. GitHub Actions: Setup Secrets

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **Repository secrets**, and add:

| Secret Key             | Value from              |
|------------------------|-------------------------|
| `STRAPI_APP_KEYS`      | `.env` (`APP_KEYS`)     |
| `ADMIN_JWT_SECRET`     | `.env`                  |
| `API_TOKEN_SALT`       | `.env`                  |
| `JWT_SECRET`           | `.env`                  |
| `ENCRYPTION_KEY`       |  `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"` | |
| `TRANSFER_TOKEN_SALT`  | `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"` |         |
| `VPS_HOST`             | VPS IP                  |
| `VPS_USER`             | VPS username            |
| `VPS_SSH_KEY`          | Your **private** SSH key|

Also, add your **public key** to the VPS:

```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

---

### 6. Run the GitHub Deployment Action

1. Go to your GitHub repo.
2. Click the **"Actions"** tab.
3. Select the deploy workflow.
4. Click **"Run workflow"**.

---

## 7. 🌐 Test

your strapi cms should be running in YOURIPADDRESS:1337

---

## 📚 Resources

- [Strapi Docs](https://docs.strapi.io)
- [Deployment Guide](https://docs.strapi.io/dev-docs/deployment)
- [Strapi Tutorials](https://strapi.io/tutorials)
- [Strapi GitHub](https://github.com/strapi/strapi)

---

## ✨ Community

- [Discord](https://discord.strapi.io)
- [Forum](https://forum.strapi.io)
- [Awesome Strapi](https://github.com/strapi/awesome-strapi)

