# Complete Step-by-Step Deployment Guide for Assembly-Endgame

## Prerequisites
- GitHub account
- Netlify account
- Git installed on your computer

---

## Step 1: Initialize Git Repository (if not already done)

### Open Command Prompt/Terminal in your project folder

1. Navigate to your project directory:
```bash
cd "C:\Users\hp\OneDrive\Desktop\Program\React\React\Assembly-Endgame\Assembly-Endgame"
```

2. Check if git is already initialized:
```bash
git status
```

3. If git is not initialized, run:
```bash
git init
```

---

## Step 2: Stage and Commit All Files

1. Add all files to staging:
```bash
git add .
```

2. Make your first commit:
```bash
git commit -m "Initial commit: Assembly-Endgame project"
```

---

## Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `assembly-endgame` (or any name you prefer)
   - **Description**: (optional) "React + Vite word puzzle game"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

---

## Step 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

1. Add the remote repository (replace YOUR_USERNAME with your GitHub username):
```bash
git remote add origin https://github.com/YOUR_USERNAME/assembly-endgame.git
```

2. Rename branch to main (if needed):
```bash
git branch -M main
```

3. Push to GitHub:
```bash
git push -u origin main
```

You'll be asked for your GitHub username and password (use a Personal Access Token if password authentication is required).

---

## Step 5: Deploy to Netlify

### Option A: Deploy via Netlify Website (Recommended for Beginners)

1. Go to [Netlify.com](https://www.netlify.com)
2. Sign up or sign in (you can use "Sign up with GitHub" for easier integration)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub repositories
6. Select your repository: `assembly-endgame`

### Configure Build Settings

**Critical Settings:**
- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Advanced Settings (if needed):
Click **"Show advanced"** to configure:
- **Build settings**:
  - Clear cache and deploy site

7. Click **"Deploy site"**

---

## Step 6: Configure Netlify Build (Important for React Router if you add it later)

Create a file called `_redirects` in the `public` folder to handle client-side routing:

Create: `Assembly-Endgame/public/_redirects`

Content:
```
/*    /index.html   200
```

This ensures that all routes redirect to index.html for single-page application support.

---

## Step 7: Wait for Deployment

1. Netlify will automatically:
   - Install dependencies (`npm install`)
   - Run the build command (`npm run build`)
   - Deploy the site

2. You'll see the deployment progress in real-time
3. Once done, you'll get a URL like: `https://your-site-name.netlify.app`

---

## Step 8: Verify the Deployment

1. Click on your site URL to open it
2. Verify that your app loads correctly
3. Test all features of your application

---

## Step 9: Set Custom Domain (Optional)

1. In Netlify dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your custom domain

---

## Step 10: Automatic Deployments (Already Enabled)

- Netlify automatically deploys your site whenever you push changes to GitHub
- Every time you run `git push`, Netlify will rebuild and redeploy automatically

---

## Troubleshooting Common Issues

### Issue 1: Build Fails
**Error**: "Command failed with exit code 1"

**Solution**: 
- Check your build settings in Netlify
- Ensure Build command is: `npm run build`
- Ensure Publish directory is: `dist`
- Check the build logs for specific errors

### Issue 2: 404 Errors
**Error**: Page not found when navigating

**Solution**:
- Add the `_redirects` file mentioned in Step 6

### Issue 3: Blank Page After Deployment
**Error**: Site loads but shows blank page

**Solution**:
- Check browser console for errors
- Verify that the base path in vite.config.js is correct (should be "/")
- Ensure all assets are properly imported with relative paths

### Issue 4: Environment Variables (if needed)
If you need to use environment variables:

1. In Netlify dashboard, go to **"Site settings"** → **"Environment variables"**
2. Add your variables
3. Redeploy the site

---

## Important Files for Netlify Deployment

### ✅ Already Configured:
- `package.json` - Has build script
- `.gitignore` - Properly configured
- `vite.config.js` - Standard configuration

### ✅ Recommended to Add:
- `public/_redirects` - For SPA routing support (add this)

---

## Quick Commands Reference

```bash
# Navigate to project
cd "C:\Users\hp\OneDrive\Desktop\Program\React\React\Assembly-Endgame\Assembly-Endgame"

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (triggers Netlify auto-deploy)
git push origin main

# View build logs in Netlify dashboard
```

---

## Testing Locally Before Deployment

Before deploying, test your production build:

```bash
npm run build
npm run preview
```

This builds and previews the production version locally.

---

## Security Tips

1. Never commit sensitive information like API keys or passwords
2. Use Netlify Environment Variables for secrets
3. Keep your `.gitignore` updated

---

## That's It! 🎉

Your site should now be live on Netlify and will automatically update whenever you push to GitHub!

**Your workflow:**
1. Make changes to your code
2. Run `git add .`
3. Run `git commit -m "your message"`
4. Run `git push origin main`
5. Netlify automatically deploys in ~2-3 minutes
