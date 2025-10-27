# Quick Start - Deploy to Netlify

## Summary in 3 Steps

### 1. Push to GitHub
```bash
cd "C:\Users\hp\OneDrive\Desktop\Program\React\React\Assembly-Endgame\Assembly-Endgame"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/assembly-endgame.git
git push -u origin main
```

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login (use "Login with GitHub")
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### 3. Deploy!
- Click "Deploy site"
- Wait 2-3 minutes
- Get your live URL!

---

## After First Deploy

Every time you make changes:
```bash
git add .
git commit -m "Your message"
git push origin main
```

Netlify auto-deploys! 🚀
