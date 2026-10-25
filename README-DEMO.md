# Heroku Demo Basic

A minimal Node.js + Express project for demonstrating deployment to Heroku.

## 1. Run locally

```bash
npm install
npm start
```

Open: http://localhost:3000

Health check: http://localhost:3000/health

Stop the server with `Ctrl + C`.

## 2. Verify tools

```bash
node --version
npm --version
git --version
heroku --version
```

## 3. Login to Heroku

```bash
heroku login
```

## 4. Initialize Git

```bash
git init
git add .
git commit -m "Initial Heroku demo"
git branch -M main
```

If Git asks for your name/email first:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Then repeat the commit command.

## 5A. Easiest deployment: create the Heroku app from CLI

```bash
heroku create
```

This creates a Heroku app and automatically adds the `heroku` Git remote.

Deploy:

```bash
git push heroku main
```

Open the deployed website:

```bash
heroku open
```

Check logs if there is a problem:

```bash
heroku logs --tail
```

## 5B. If you already created an app in the Heroku Dashboard

Replace `YOUR-HEROKU-APP-NAME` with the app name from the Dashboard:

```bash
heroku git:remote -a YOUR-HEROKU-APP-NAME
git push heroku main
heroku open
```

## 6. Make a visible change and redeploy

Edit the message in `index.js`, then run:

```bash
git add .
git commit -m "Update demo message"
git push heroku main
heroku open
```

This is useful for showing the class how a local code change becomes a new deployed version.

## 7. Optional cleanup after the demo

See the app name:

```bash
heroku apps
```

You can delete an app from the Heroku Dashboard after the presentation if you no longer need it.
